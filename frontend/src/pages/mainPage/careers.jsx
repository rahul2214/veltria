import { useState, useMemo } from 'react';
import useFetchEmployees from '../../hooks/useFetchEmployees';
import EmployeeSearchInput from '../../components/SearchInput';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import useDebouncedSearch from '../../hooks/useDebouncedSearch'; // Import your custom hook

const Jobs = () => {
    const { jobs, totalJobs, loading, error } = useFetchEmployees();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField] = useState("createdAt");
    const [sortOrder] = useState("desc");
    const [selectedDomain, setSelectedDomain] = useState("");
    const [selectedJobType, setSelectedJobType] = useState("");
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [tempDomain, setTempDomain] = useState("");
    const [tempJobType, setTempJobType] = useState("");
    const navigate = useNavigate();

    // Use the custom hook for debounced search
    const debouncedSearchTerm = useDebouncedSearch(searchTerm);

    const handleJobClick = (employee) => {
        const { _id } = employee;
        navigate(`/job-details/${_id}`);
    };

    const applyFilters = () => {
        setSelectedDomain(tempDomain);
        setSelectedJobType(tempJobType);
        setShowFilterModal(false);
    };

    const sortedEmployees = useMemo(() => {
        let filteredJobs = [...jobs];

        if (selectedDomain) {
            filteredJobs = filteredJobs.filter(
                (job) => job.domain.toLowerCase() === selectedDomain.toLowerCase()
            );
        }

        if (selectedJobType) {
            filteredJobs = filteredJobs.filter(
                (job) => job.jobtype.toLowerCase() === selectedJobType.toLowerCase()
            );
        }

        if (debouncedSearchTerm) {
            filteredJobs = filteredJobs.filter(
                (job) =>
                    job.jobrole.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    job.location.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    job.companyname.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
        }

        if (sortField) {
            filteredJobs.sort((a, b) => {
                const valueA = sortField === "createdAt" ? new Date(a[sortField]) : a[sortField].toLowerCase();
                const valueB = sortField === "createdAt" ? new Date(b[sortField]) : b[sortField].toLowerCase();
                return sortOrder === "asc" ? valueA > valueB : valueA < valueB;
            });
        }

        return filteredJobs;
    }, [jobs, debouncedSearchTerm, sortField, sortOrder, selectedDomain, selectedJobType]);

    // Extract unique domains and job types
    const uniqueDomains = useMemo(() => [...new Set(jobs.map((job) => job.domain))], [jobs]);
    const uniqueJobTypes = useMemo(() => [...new Set(jobs.map((job) => job.jobtype))], [jobs]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">Error: {error}</div>;

    return (
        <div>
            <div className="mx-auto p-4">
                <div className="bg-gray-400 p-6 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-0">
                    {/* Search Input */}
                    <div className="flex justify-end mb-4">
                        <EmployeeSearchInput onSearch={setSearchTerm} />
                    </div>

                    {/* Total Jobs Count */}
                    <h1 className="text-gray-700 mb-4">Total Jobs: {totalJobs}</h1>

                    {/* Filter Button */}
                    <div className="flex justify-end mb-6">
                        <div
                            onClick={() => setShowFilterModal(true)}
                            className="flex items-center gap-2 cursor-pointer bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600 transition duration-200 px-4 py-2 rounded-lg shadow-md"
                            title="Filters"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 4.5h18M6.75 9h10.5M10.5 13.5h3M12 17.25h.75"
                                />
                            </svg>
                            <span className="text-lg font-medium">Filter</span>
                        </div>
                    </div>

                    {/* Jobs List */}
                    {sortedEmployees.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedEmployees.map(employee => (
                                <div
                                    key={employee._id}
                                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
                                >
                                    <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
                                        {employee.companyname}
                                    </h2>
                                    <p className="text-gray-600"><strong>Job Role: </strong>{employee.jobrole}</p>
                                    <p className="text-gray-600"><strong>Job Type: </strong>{employee.jobtype}</p>
                                    <p className="text-gray-600"><strong>Location: </strong>{employee.location || "N/A"}</p>
                                    <p className="text-gray-600 mt-2">
                                        <strong>Posted On: </strong>
                                        {new Date(employee.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                        })}
                                    </p>

                                    <button
                                        onClick={() => handleJobClick(employee)}
                                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                                    >
                                        Know More
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-700">
                            <p>No jobs available</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Filter Modal */}
            {showFilterModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-3/4 max-w-md">
                        <h2 className="text-lg font-bold mb-4">Apply Filters</h2>
                        <div className="mb-4">
                            <label className="text-gray-700">
                                Job Type:
                                <select
                                    value={tempJobType}
                                    onChange={(e) => setTempJobType(e.target.value)}
                                    className="ml-2 p-2 bg-white border rounded"
                                >
                                    <option value="">All Job Types</option>
                                    {uniqueJobTypes.map(jobtype => (
                                        <option key={jobtype} value={jobtype}>{jobtype}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700">
                                Domain:
                                <select
                                    value={tempDomain}
                                    onChange={(e) => setTempDomain(e.target.value)}
                                    className="ml-2 p-2 bg-white border rounded"
                                >
                                    <option value="">All Domains</option>
                                    {uniqueDomains.map(domain => (
                                        <option key={domain} value={domain}>{domain}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                           
                            <button
                                onClick={() => setShowFilterModal(false)}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button> <button
                                onClick={applyFilters}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Jobs;

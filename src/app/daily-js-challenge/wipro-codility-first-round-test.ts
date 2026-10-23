type SortOrder = "asc" | "desc" | null;

function getFilteredEmployees(
    list: Employee[],
    search: string,
    dept: string,
    sortOrder: SortOrder
): Employee[] {
    const term = (search || "").toLowerCase();
    const selected = (dept || "").trim();

    const result = list.filter(emp => {
        const matchName = emp.name.toLowerCase().includes(term);
        const matchDept =
            !selected || selected === "All" || (emp.department ?? "") === selected;
        return matchName && matchDept;
    });

    if (sortOrder) {
        const dir = sortOrder === "asc" ? 1 : -1;
        result.sort((a, b) => dir * (a.experience - b.experience));
    }
    return result;
}

// Toggle on button click
let order: SortOrder = "asc";
const toggleSort = () => (order = order === "asc" ? "desc" : "asc");
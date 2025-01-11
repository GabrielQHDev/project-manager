export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200 custom-scrollbar";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: isDarkMode ? "#e5e7eb" : "#374151",
      "& [role='row'] > *": {
        backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
        borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
      },
    },
    "& .MuiIconButton-root": {
      color: isDarkMode ? "#a3a3a3" : "#374151",
    },
    "& .MuiTablePagination-root": {
      color: isDarkMode ? "#a3a3a3" : "#374151",
    },
    "& .MuiTablePagination-selectIcon": {
      color: isDarkMode ? "#a3a3a3" : "#374151",
    },
    "& .MuiDataGrid-cell": {
      border: "none",
      "&:focus": {
        outline: "none",
      },
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
      "&:hover": {
        backgroundColor: isDarkMode ? "#2a2c2e" : "#f9fafb",
      },
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
    },
    "& .MuiDataGrid-virtualScroller": {
      overflowY: "auto",
      scrollbarWidth: "thin",
    },
    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
      width: "8px",
    },
    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
      backgroundColor: isDarkMode ? "#4b5563" : "#9ca3af",
      borderRadius: "4px",
    },
    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
      backgroundColor: isDarkMode ? "#374151" : "#6b7280",
    },
    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
      backgroundColor: isDarkMode ? "#1d1f21" : "#f3f4f6",
    },
  };
};

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const categories = ["Electronics", "Clothing", "Food", "Books"];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "price", headerName: "Price", width: 120 },
  { field: "stock", headerName: "Stock", width: 100 },
];

const rows = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: categories[i % categories.length],
  price: Math.floor(Math.random() * 500) + 50,
  stock: Math.floor(Math.random() * 100),
}));

function CustomLoadingOverlay() {
  return (
    <div style={{ position: "absolute", top: 0, width: "100%" }}>
      <LinearProgress />
    </div>
  );
}

const Data = () => {
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("");

  const filteredRows = rows.filter((row) => {
    const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? row.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <h1 className="ml-[220px]">Products Data</h1>

      {/* 🔍 Search and Filter */}
      <div className=" w-[300px] ml-[220px]" style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TextField
          label="Filter by Category"
          select
          size="small"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ width: 290 }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* 🟢 Data Grid */}
      <div className="ml-[220px] w-[1000px]" style={{ height: 800,  position: "relative" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[25, 50, 100]}
          pagination
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          loading={false}
        />
      </div>
    </>
  );
};

export default Data;

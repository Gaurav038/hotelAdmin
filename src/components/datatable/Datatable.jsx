import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import axios from "axios";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]
  const [List, setList] = useState([]);
  const {data, loading, error} = useFetch(`/${path}`)

  useEffect(() => {
  setList(data)
  }, [data])

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
       All {path} List
        {path !== 'booking' && <Link to={`/${path}/new`} className="link">
          Add New
        </Link>}
      </div>

      <DataGrid
        className="datagrid"
        rows={List}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={row => row._id}
      />
    </div>
  );
};

export default Datatable;
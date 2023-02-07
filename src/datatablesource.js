export const userColumns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "country",
      headerName: "Country",
      width: 230,
    },
    {
      field: "city",
      headerName: "City",
      width: 230,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 230,
    },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 240,
  },
  {
    field: "type",
    headerName: "Type",
    width: 140,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "cheapestPrice",
    headerName: "Price",
    width: 60,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const bookingColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  {
    field: "room",
    headerName: "Room Name",
    width: 250,
  },
  {
    field: "fromdate",
    headerName: "From date",
    width: 150,
  },
  {
    field: "todate",
    headerName: "To date",
    width: 150,
  },
  {
    field: "totalamount",
    headerName: "Total Amount",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
];
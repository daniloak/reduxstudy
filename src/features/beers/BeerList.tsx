import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from "@mui/x-data-grid";
import { useAppSelector } from "../../app/hooks";
import { selectBeers, useGetBeersQuery } from "./beerSlice";

export function BeerList() {
    const { data, isFetching, error } = useGetBeersQuery();

    const beers = useAppSelector(selectBeers);

    const rows: GridRowsProp = beers.map((beer) => ({
        id: beer.id,
        name: beer.name,
        link: beer.link,
        available: beer.available,
        brand: beer.brand,
        category: beer.category
    }));

    const columns: GridColDef[] = [
        {
            field: 'id', headerName: 'ID', flex: 1
        },
        {
            field: 'name', headerName: 'Name', flex: 1
        },
        {
            field: 'link', headerName: 'Link', flex: 1
        },
        {
            field: 'available', headerName: 'Available', flex: 1
        },
        {
            field: 'brand', headerName: 'Brand', flex: 1
        },
        {
            field: 'category', headerName: 'Category', flex: 1
        },
    ];

    return (
        <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h3" component="h1">
                Hello
                {beers.map((beer) => (
                    <Typography key={beer.name}>{beer.name}</Typography>
                ))}
            </Typography>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    components={{ Toolbar: GridToolbar }}
                    disableColumnSelector
                    disableColumnFilter
                    disableDensitySelector
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debouncesMs: 500 }
                        }
                    }}
                    rows={rows} columns={columns}
                />
            </div>
        </Box>
    );
}
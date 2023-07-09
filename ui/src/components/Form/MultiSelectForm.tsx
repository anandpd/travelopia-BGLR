import * as React from "react";
import { Box, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Chip } from "@mui/material";
import { IFormSelection } from "../../interfaces/form.select.interface";
import { formSelectionData } from "../../utils/data/Formselection";

// const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Omar Alexander", "Carlos Abbott", "Miriam Wagner", "Bradley Wilkerson", "Virginia Andrews", "Kelly Snyder"];

export const MultipleSelectChip = (props: IFormSelection) => {
  const [state, setState] = React.useState({
    places: [],
    intrests: [],
    count: "",
    budget: "",
  });

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setState(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      {props.formSelectionData.map(({ heading, canSelectMultiple, options }) => (
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-chip-label">{heading}</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id={heading}
            multiple={canSelectMultiple}
            value={state.intrests}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label={heading} />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {options.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
};

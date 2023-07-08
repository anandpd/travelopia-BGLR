import React, { ReactElement, useEffect } from "react";
import "./form.style.css";
import { Container, Form } from "react-bootstrap";
import { Box, FormControl, InputLabel, Select, OutlinedInput, MenuItem, Chip, useTheme } from "@mui/material";
import { IFormSelection } from "../../interfaces/form.select.interface";
import { MultipleSelectChip } from "./MultiSelectForm";
import { formSelectionData } from "../../utils/data/Formselection";

export const FormSelectComponent: React.FC<any> = (props: any): ReactElement => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [places, setPlaces] = React.useState<Array<string>>([]);
  const [intrests, setIntrests] = React.useState<Array<string>>([]);
  const [count, setCount] = React.useState<string>("");
  const [budget, setBudget] = React.useState<string>("");

  // const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: any) => {
    const { target } = event;
    if (target.name == "places") setPlaces(typeof target.value === "string" ? target.value.split(",") : target.value);
    else if (target.name == "intrests") setIntrests(typeof target.value === "string" ? target.value.split(",") : target.value);
    else if (target.name == "count") setCount(target.value);
    else if (target.name == "budget") setBudget(target.value);
    // setPlaces(typeof target.value === "string" ? target.value.split(",") : target.value);
  };

  return (
    <React.Fragment>
      <Container className="form-selection-container">
        {/* Places Selector */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel className="select-optins-mui" id="demo-multiple-chip-label">
            {props.formSelectionData.placesToVisit.heading}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            style={{ borderRadius: "10px" }}
            name={props.formSelectionData.placesToVisit.key}
            value={places}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {props.formSelectionData.placesToVisit.options.map((name: string) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Inrests Selector */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel className="select-optins-mui" id="demo-multiple-chip-label">
            {props.formSelectionData.intrests.heading}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            style={{ borderRadius: "10px" }}
            name={props.formSelectionData.intrests.key}
            value={intrests}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {props.formSelectionData.intrests.options.map((name: string) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Travelers Selector */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel className="select-optins-mui" id="demo-multiple-chip-label">
            {props.formSelectionData.count.heading}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple={false}
            style={{ borderRadius: "10px" }}
            name={props.formSelectionData.count.key}
            value={count}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            MenuProps={MenuProps}
          >
            {props.formSelectionData.count.options.map((name: string) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Budget Selector */}
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel className="select-optins-mui" id="demo-multiple-chip-label">
            {props.formSelectionData.budget.heading}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple={false}
            style={{ borderRadius: "10px" }}
            name={props.formSelectionData.budget.key}
            value={budget}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            MenuProps={MenuProps}
          >
            {props.formSelectionData.budget.options.map((name: string) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </React.Fragment>
  );
};

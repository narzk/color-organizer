import React, { useEffect, useState } from "react";
import colorListJson from "../color-data.json";
import { ColorCard } from "./ColorCard";
import { NavBar } from "./NavBar";
import Grid from "@mui/material/Grid";
import { SideBar } from "./SideBar";
import "../styles/colorList.css";

export const ColorList = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    setColorList(colorListJson);
  }, []);
  return (
    <>
      <NavBar
        onchange={(val) =>
          val.length === 7 && setColorList([...colorList, { color: val }])
        }
      />
      <div className="container">
        <SideBar />
        <Grid style={{ "margin-top": "3px" }} container spacing={3}>
          {colorList.map((color) => (
            <Grid item xs={4}>
              <ColorCard color={color.color} title={color.title} />
            </Grid>
          ))}
        </Grid>

        <SideBar />
      </div>
    </>
  );
};

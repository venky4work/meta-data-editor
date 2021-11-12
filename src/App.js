import logo from "./logo.svg";
import "./App.css";

import { HotTable } from "@handsontable/react";
import { useEffect, useState } from "react";

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13],
];

function App() {
  const sourceDataObject = [
    {
      category: "Best Rock Performance",
      artist: null,
      title: null,
      label: null,
      __children: [
        {
          title: "Don't Wanna Fight",
          artist: "Alabama Shakes",
          label: "ATO Records",
        },
        {
          title: "What Kind Of Man",
          artist: "Florence & The Machine",
          label: "Republic",
        },
        {
          title: "Something From Nothing",
          artist: "Foo Fighters",
          label: "RCA Records",
        },
        {
          title: "Ex's & Oh's",
          artist: "Elle King",
          label: "RCA Records",
        },
        {
          title: "Moaning Lisa Smile",
          artist: "Wolf Alice",
          label: "RCA Records/Dirty Hit",
          __children: [
            {
              title: "Don't Wanna Fight",
              artist: "Alabama Shakes",
              label: "ATO Records",
            },
            {
              title: "What Kind Of Man",
              artist: "Florence & The Machine",
              label: "Republic",
            },
            {
              title: "Something From Nothing",
              artist: "Foo Fighters",
              label: "RCA Records",
              __children: [
                {
                  title: "Don't Wanna Fight",
                  artist: "Alabama Shakes",
                  label: "ATO Records",
                },
                {
                  title: "What Kind Of Man",
                  artist: "Florence & The Machine",
                  label: "Republic",
                },
                {
                  title: "Something From Nothing",
                  artist: "Foo Fighters",
                  label: "RCA Records",
                },
                {
                  title: "Ex's & Oh's",
                  artist: "Elle King",
                  label: "RCA Records",
                },
                {
                  title: "Moaning Lisa Smile",
                  artist: "Wolf Alice",
                  label: "RCA Records/Dirty Hit",
                },
              ],
            },
            {
              title: "Ex's & Oh's",
              artist: "Elle King",
              label: "RCA Records",
            },
            {
              title: "Moaning Lisa Smile",
              artist: "Wolf Alice",
              label: "RCA Records/Dirty Hit",
            },
          ],
        },
      ],
    },
    {
      category: "Best Metal Performance",
      __children: [
        {
          title: "Cirice",
          artist: "Ghost",
          label: "Loma Vista Recordings",
        },
        {
          title: "Identity",
          artist: "August Burns Red",
          label: "Fearless Records",
        },
        {
          title: "512",
          artist: "Lamb Of God",
          label: "Epic Records",
        },
        {
          title: "Thank You",
          artist: "Sevendust",
          label: "7Bros Records",
        },
        {
          title: "Custer",
          artist: "Slipknot",
          label: "Roadrunner Records",
        },
      ],
    },
    {
      category: "Best Rock Song",
      __children: [
        {
          title: "Don't Wanna Fight",
          artist: "Alabama Shakes",
          label: "ATO Records",
        },
        {
          title: "Ex's & Oh's",
          artist: "Elle King",
          label: "RCA Records",
        },
        {
          title: "Hold Back The River",
          artist: "James Bay",
          label: "Republic",
        },
        {
          title: "Lydia",
          artist: "Highly Suspect",
          label: "300 Entertainment",
        },
        {
          title: "What Kind Of Man",
          artist: "Florence & The Machine",
          label: "Republic",
        },
      ],
    },
    {
      category: "Best Rock Album",
      __children: [
        {
          title: "Drones",
          artist: "Muse",
          label: "Warner Bros. Records",
        },
        {
          title: "Chaos And The Calm",
          artist: "James Bay",
          label: "Republic",
        },
        {
          title: "Kintsugi",
          artist: "Death Cab For Cutie",
          label: "Atlantic",
        },
        {
          title: "Mister Asylum",
          artist: "Highly Suspect",
          label: "300 Entertainment",
        },
        {
          title: ".5: The Gray Chapter",
          artist: "Slipknot",
          label: "Roadrunner Records",
        },
      ],
    },
  ];

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])
  return (
    <div className="App">
      <HotTable
        data={sourceDataObject}
        licenseKey={"non-commercial-and-evaluation"}
        rowHeaders={true}
        colHeaders={["Category", "Artist", "Title", "Album", "Label"]}
        nestedRows={true}
        contextMenu={true}
        rowHeaderWidth={120}
      />
    </div>
  );
}

export default App;

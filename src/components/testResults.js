import React, { Component } from "react";
import { Grid, Cell, DataTable, TableHeader } from "react-mdl";

class TestResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true,
    };
  }

  toggleTable = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { isExpanded } = this.state;

    return (
      <Grid>
        <Cell col={2}></Cell>
        <Cell col={10}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 style={{ marginTop: "0px", color: "white", flexGrow: 2 }}>
              {this.props.title}:
            </h5>
            <button
              onClick={this.toggleTable}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
              }}
              aria-label={isExpanded ? "Collapse table" : "Expand table"}
            >
              {isExpanded ? "▲" : "▼"}
            </button>
          </div>
          {isExpanded && (
            <div style={{ display: "flex" }}>
              <DataTable
                className="result-table"
                shadow={4}
                sortable
                rows={[
                  {
                    module: "Reasoning for Problem Solving",
                    year: 1,
                    result: 80 + "%",
                  },
                  {
                    module: "Introduction to Software Engineering",
                    year: 1,
                    result: 40 + "%",
                  },
                  {
                    module: "Programming",
                    year: 1,
                    result: 53 + "%",
                  },
                  {
                    module: "Architecture and Networks",
                    year: 1,
                    result: 69 + "%",
                  },
                  {
                    module: "Databases",
                    year: 1,
                    result: 81 + "%",
                  },
                  {
                    module: "Professional Computing Practice",
                    year: 2,
                    result: 78 + "%",
                  },
                  {
                    module: "Architecture and Networks",
                    year: 2,
                    result: 81 + "%",
                  },
                  {
                    module: "Data Structures and Algorithms ",
                    year: 2,
                    result: 69 + "%",
                  },
                  {
                    module: "Information Modelling",
                    year: 2,
                    result: 59 + "%",
                  },
                  {
                    module: "Software Development",
                    year: 2,
                    result: 70 + "%",
                  },
                  {
                    module: "Software Engineering",
                    year: 2,
                    result: 80 + "%",
                  },
                  {
                    module: "Concurrent Programming",
                    year: 4,
                    result: 78 + "%",
                  },
                  {
                    module: "Software Engineering Project",
                    year: 4,
                    result: 73 + "%",
                  },
                  {
                    module: "Advanced Computer Arch",
                    year: 4,
                    result: 71 + "%",
                  },
                  {
                    module: "Malware Analysis",
                    year: 4,
                    result: 75 + "%",
                  },
                  {
                    module: "Cloud Computing",
                    year: 4,
                    result: 70 + "%",
                  },
                ]}
              >
                <TableHeader name="module" style={{ color: "white" }}>
                  Module
                </TableHeader>
                <TableHeader
                  numeric
                  sortable
                  name="year"
                  style={{ color: "white" }}
                >
                  Year
                </TableHeader>
                <TableHeader
                  numeric
                  sortable
                  name="result"
                  style={{ color: "white" }}
                >
                  Result
                </TableHeader>
              </DataTable>
            </div>
          )}
        </Cell>
      </Grid>
    );
  }
}

export default TestResults;

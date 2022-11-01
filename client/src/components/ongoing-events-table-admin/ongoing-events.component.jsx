import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import Wrapper from "./ongoing-evetns.style";
import { changedateformat } from "../../utils/dateformat";

// const orders = [
//   {
//     name: "Ekaterina Tankova",
//     deadline: 1555016400000,
//     count: 54,
//   },
//   {
//     name: "Cao Yu",
//     deadline: 1555016400000,
//     count: 44,
//   },
//   {
//     name: "Alexa Richardson",
//     deadline: 1554930000000,
//     count: 58,
//   },
//   {
//     name: "Anje Keizer",
//     deadline: 1554757200000,
//     count: 27,
//   },
//   {
//     name: "Clarke Gillebert",
//     deadline: 1554670800000,
//     count: 8,
//   },
//   {
//     name: "Adam Denisov",
//     deadline: 1554670800000,
//     count: 96,
//   },
// ];

const OngoingEventsAdmin = ({ events, ...otherProps }) => {
  console.log(events);
  return (
    <Wrapper>
      <Card
        {...otherProps}
        sx={{
          my: 2,
          mx: 2,
        }}
      >
        <CardHeader
          title="Ongoing Events"
          titleTypographyProps={{ fontSize: "2em" }}
          sx={{ ml: 5 }}
        />
        <PerfectScrollbar>
          <Box sx={{ minWidth: 250, maxWidth: 1000, mx: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Serial No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Deadline</TableCell>
                  <TableCell align="center">Count</TableCell>
                  <TableCell align="center">Responses</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((event, idx) => (
                  <TableRow hover key={idx}>
                    <TableCell >{idx + 1}</TableCell>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>
                      {changedateformat(event.endDate)}
                    </TableCell>
                    <TableCell align="center">{event.responses.length}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" size="small">
                        View responses
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </Wrapper>
  );
};

export default OngoingEventsAdmin;

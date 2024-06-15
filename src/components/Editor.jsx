import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControllerEditor } from "react-codemirror2";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";

import { useState } from "react";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;
const Header = styled(Box)`
  background: #060606;
  color: #aaaebc;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

const Containor = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;

  flex-direction: column;
  padding: 0px 7px 7px;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Containor style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              color: "#060606",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="medium"
          style={{
            alignSelf: "center",
            cursor: "pointer",
            background: "#252525",
            borderRadius: 5,
            marginLeft: "5px",
          }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControllerEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Containor>
  );
};

export default Editor;

import TextField from "@mui/material/TextField";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CancelIcon from "@mui/icons-material/Cancel";


const MultipleAnswer = ({ options, setOptions, other, setOther }) => {
  const handleInput = (evt, idx) => {
    let newOptions = JSON.parse(options);
    newOptions[idx] = evt.target.value;
    setOptions(JSON.stringify(newOptions));
  };

  const handleAddOption = () => {
    const oldOptions = JSON.parse(options);
    let len = oldOptions.length + 1;
    let newOptions = [...JSON.parse(options), `Option ${len}`];
    setOptions(JSON.stringify(newOptions));
  };

  const handleRemoveOption = (idx) => {
    let newOptions = JSON.parse(options);
    newOptions.splice(idx, 1);
    setOptions(JSON.stringify(newOptions));
  };

  return (
    <div>
      {!!options.length &&
        JSON.parse(options).map((el, idx) => (
          <div
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "1em" }}
          >
            <RadioButtonCheckedIcon />
            <TextField
              variant="standard"
              hiddenLabel
              value={el}
              size="small"
              autoFocus
              sx={{ my: 1, width: { md: "40%" } }}
              onChange={(e) => handleInput(e, idx)}
            />
            <CancelIcon
              color="error"
              sx={{ cursor: "pointer" }}
              onClick={() => handleRemoveOption(idx)}
            />
          </div>
        ))}
      {other && (
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <RadioButtonCheckedIcon />
          <TextField
            variant="standard"
            disabled
            hiddenLabel
            value="Other..."
            size="small"
            sx={{ my: 1, width: { md: "40%" } }}
          />
          <CancelIcon
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={() => setOther(false)}
          />
        </div>
      )}
      <div className="add-option-div">
        <span className="add-option" onClick={handleAddOption}>
          Add option
        </span>
        &nbsp;or&nbsp;
        <span className="add-option" onClick={() => setOther(!other)}>
          {other ? "remove " : "add "} "other"
        </span>
      </div>
    </div>
  );
};

export default MultipleAnswer;
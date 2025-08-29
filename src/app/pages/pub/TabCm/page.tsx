import ComButton from "@/components/com/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Button() {
  return (
    <>
      <div className="in">
        <h2 className="title-2 title">Button Component</h2>
        <div className="table-wrap mt30">
          <table className="table">
            <colgroup>
              <col width="150" />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>/</th>
                <th>Default</th>
                <th>Disabled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Default (Primary)</th>
                <td>
                  <ComButton className="btn-prm sm">Primary</ComButton>
                  <ComButton className="btn-prm">Primary</ComButton>
                  <ComButton className="btn-prm lg">Primary</ComButton>
                </td>
                <td>
                  <ComButton className="btn-prm sm" disabled>
                    Primary
                  </ComButton>
                  <ComButton className="btn-prm" disabled>
                    Primary
                  </ComButton>
                  <ComButton className="btn-prm lg" disabled>
                    Primary
                  </ComButton>
                </td>
              </tr>
              <tr>
                <th>Negative (Error)</th>
                <td>
                  <ComButton
                    variant="outlined"
                    className="btn-neg sm"
                    color="error"
                  >
                    Negative
                  </ComButton>
                  <ComButton
                    variant="outlined"
                    className="btn-neg"
                    color="error"
                  >
                    Negative
                  </ComButton>
                  <ComButton
                    variant="outlined"
                    className="btn-neg lg"
                    color="error"
                  >
                    Negative
                  </ComButton>
                </td>
                <td>
                  <ComButton
                    variant="outlined"
                    className="btn-neg sm"
                    color="error"
                    disabled
                  >
                    Negative
                  </ComButton>
                  <ComButton
                    variant="outlined"
                    className="btn-neg"
                    color="error"
                    disabled
                  >
                    Negative
                  </ComButton>
                  <ComButton
                    variant="outlined"
                    className="btn-neg lg"
                    color="error"
                    disabled
                  >
                    Negative
                  </ComButton>
                </td>
              </tr>
              <tr>
                <th>Success</th>
                <td>
                  <ComButton className="btn-neg sm" color="success">
                    Success
                  </ComButton>
                  <ComButton className="btn-neg" color="success">
                    Success
                  </ComButton>
                  <ComButton className="btn-neg lg" color="success">
                    Success
                  </ComButton>
                </td>
                <td>
                  <ComButton className="btn-neg sm" color="success" disabled>
                    Success
                  </ComButton>
                  <ComButton className="btn-neg" color="success" disabled>
                    Success
                  </ComButton>
                  <ComButton className="btn-neg lg" color="success" disabled>
                    Success
                  </ComButton>
                </td>
              </tr>
              <tr>
                <th>With Icons</th>
                <td>
                  <ComButton variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </ComButton>
                  <ComButton variant="contained" endIcon={<SendIcon />}>
                    Send
                  </ComButton>
                </td>
                <td>
                  <ComButton className="btn-neg sm" color="success" disabled>
                    Success
                  </ComButton>
                  <ComButton className="btn-neg" color="success" disabled>
                    Success
                  </ComButton>
                  <ComButton className="btn-neg lg" color="success" disabled>
                    Success
                  </ComButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

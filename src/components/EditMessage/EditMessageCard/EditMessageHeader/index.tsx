import { FormControl, MenuItem, Select } from "@mui/material";
import { CardTip } from "../../../CardTip";
import "./EditMessageHeader.scss";
import { useMessagePreview } from "../../../../hooks/MessagePreview/useMessagePreview";

export const EditMessageHeader = () => {
  const { setImageHeader } = useMessagePreview();
  

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageHeader(reader.result as string);
    };

    if(file){
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("header-input")?.click();
  };

  return (
    <div className="container-edit-message-header">
      <FormControl fullWidth>
        <Select id="demo-simple-select" value={"image"} onChange={() => {}}>
          <MenuItem value={"image"}>Image</MenuItem>
        </Select>
      </FormControl>
      <p>Image size recommendation: 800 x 418 pixel.</p>
      <label htmlFor="header-input">
        <button className="upload-image-button" onClick={handleButtonClick}>
          upload image
        </button>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
        id="header-input"
      />
      <div className="container-card-tips">
        <CardTip
          title="Image header tips"
          urlAction="#"
          description="Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the message (eg discounts, gifts etc.)"
        />
      </div>
    </div>
  );
};

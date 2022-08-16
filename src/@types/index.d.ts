type Color = "red" | "yellow" | "green" | "blue" | "purple" | "brown";
type submitCallback = (size: number) => void;

interface Flood {
  color: Color;
}

interface Position {
  idx: number;
}
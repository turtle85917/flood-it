type Color = "red" | "yellow" | "green" | "blue" | "purple" | "brown";
type sumbitCallback = (size: number) => void;

interface Flood {
  color: Color;
}

interface Position {
  idx: number;
}
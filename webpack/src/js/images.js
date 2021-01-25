import { info } from "./logging";
import Img from "./image";

export default function main() {
  for ( let i = 0; i < 20; i++ ) {
    info('New image is loading...');
    Img(i);
    info('loading done!');
  }
}

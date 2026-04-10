import Image from "next/image";
import Button from './components/Button'
import Card from './components/Card'
import Content from './components/Content'
import Flex from './components/Flex'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

const p1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet fringilla sem, in luctus nibh porttitor sed. Nullam dignissim laoreet nunc et pharetra. Sed et nisl sed libero eleifend finibus. Morbi a rutrum sem, vitae scelerisque mi. In interdum libero justo, ac porta dolor mattis sit amet. Cras sollicitudin vel libero eu mollis. Morbi vitae lacus magna. Integer gravida venenatis nulla, pulvinar venenatis nisl dignissim eget. Aliquam id nisi sit amet felis tristique rhoncus. Donec dui metus, interdum nec blandit in, sagittis ac massa. In consequat pulvinar tellus, a molestie urna luctus ac. Nulla feugiat tristique quam, id cursus ligula venenatis non. Etiam vel ipsum id odio tristique vulputate quis eu lacus. Donec vel risus ligula. Donec dictum vitae arcu at vehicula.';
const p2 = 'Morbi ornare, augue eu vulputate porttitor, lorem ligula dignissim turpis, nec mattis risus ipsum eget lacus. Quisque pharetra neque diam, et lobortis felis mollis id. Nulla rutrum lacus et elit malesuada cursus. Nullam aliquet, risus id hendrerit iaculis, dui diam tempor ante, semper porta leo neque a nibh. Sed consequat lectus a mi dignissim, eu luctus tortor tincidunt. Sed condimentum, massa quis interdum maximus, justo tellus vulputate enim, et tempor tortor nibh sit amet sapien. Donec consectetur, justo sit amet varius viverra, nulla velit facilisis nisl, vel ullamcorper ex magna vitae ipsum. Praesent sit amet lacus est. Vestibulum at massa tincidunt, scelerisque neque quis, pellentesque quam.';

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header />
        <Main />
        <Content content={p1} />
        <Content content={p2} />
      </div>
    </div>
  );
}

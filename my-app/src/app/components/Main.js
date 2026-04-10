import Card from './Card'
import Flex from './Flex'

const cards = [
  {
    title: 'Forest Sunset',
    img: 'https://images.unsplash.com/photo-1771677931350-67207d86caae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Waves on a Beach',
    img: 'https://images.unsplash.com/photo-1770110628704-86ba8c7b3b1c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Palm Trees on Blue Sky',
    img: 'https://plus.unsplash.com/premium_photo-1771774994010-576337c0d143?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function Main() {
  return (
    <main>
    <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
    {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}
    </div>
    <Flex classNames="bg-gray-600 text-gray-100">
      <span>Child tag one</span>
      <span>Child tag two</span>
      <span>Child tag three</span>
    </Flex>
    </main>
  );
}

import './Hero.css'
import { Carousel } from 'react-bootstrap'
import ContentParagraph from '../ContentParagraph/ContentParagraph'

export default function Hero({img1 , img2 , img3 , infoimg}) {
  return (
    <Carousel className='Hero'>
      <Carousel.Item>
        <img src={img1} alt={infoimg} className='w-100'></img>
        <Carousel.Caption>
            <ContentParagraph h1='Temporibus autem quibusdam' desc='Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.' btnsinfo="Read More" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt={infoimg} className='vh-100 w-100'></img>
        <Carousel.Caption>
        <ContentParagraph h1='Lorem ipsum dolor sit amet.' desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat consequatur excepturi distinctio deleniti sed dolorum explicabo aut quam eius eaque quaerat, nisi, odit nihil. Ipsa sapiente accusamus iure consequatur! Lorem ipsum dolor' btnsinfo="Read More" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt={infoimg} className='vh-100 w-100'></img>
        <Carousel.Caption>
        <ContentParagraph h1='Lorem ipsum dolor sit amet.' desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat consequatur excepturi distinctio deleniti sed dolorum explicabo aut quam eius eaque quaerat, nisi, odit nihil. Ipsa sapiente accusamus iure consequatur! Lorem ipsum dolor' btnsinfo="Read More" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

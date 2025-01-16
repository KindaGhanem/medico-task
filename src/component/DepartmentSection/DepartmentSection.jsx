import './DepartmentSection.css'
import MainTitleHeader from '../MainTitleHeader/MainTitleHeader'
import TabComponent from '../TabComponent/TabComponent'

import imgDep1 from './../../assets/img/departments-1.jpg'
import imgDep2 from './../../assets/img/departments-2.jpg'
import imgDep3 from './../../assets/img/departments-3.jpg'
import imgDep4 from './../../assets/img/departments-4.jpg'
import imgDep5 from './../../assets/img/departments-5.jpg'

export default function DepartmentSection() {
    const tabs =[
        {
          index:'first' ,
          links : "Cardiology"
        },
        {
          index:'second' ,
          links : "Neurology"
        },
        {
          index:'third' ,
          links : "Hepatology"
        },
        {
          index:'fourth' ,
          links : "Pediatrics"
        },
        {
          index:'fifth' ,
          links : "Ophthalmologists"
        },
      ]


    const content =[
        {
          id:'first' ,
          title : "Cardiology" ,
          span : "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona markaEt" ,
          text : " nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero" ,

        },
        {
          id:'second' ,
          title : "Neurology" ,
          span :'',
          text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam exercitationem, deleniti ea hic quis laborum debitis esse? Fugit fuga asperiores iusto! Eaque expedita ullam deleniti ipsam blanditiis provident assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aliquam vero repellat cupiditate earum provident eos velit quasi ex suscipit?" ,

        },
        {
          id:'third' ,
          title : "Hepatology" ,
          span :'',
          text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur nemo beatae harum deserunt quia labore adipisci quidem placeat reprehenderit, id, quas fugiat. In non magnam odio ipsa esse ducimus, voluptate et rerum quod, officiis suscipit aspernatur qui laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio?" ,

        },
        {
          id:'fourth' ,
          title : "Pediatrics" ,
          span : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus nesciunt debitis repellat saepe! Dolores quia qui recusandae magni porro " ,
          text : ". Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore fuga pariatur itaque at magnam a enim quam maxime ducimus corrupti quaerat mollitia earum, animi, labore culpa ad adipisci nobis!" ,

        },
        {
          id:'fifth' ,
          title : "Ophthalmologists" ,
          span : " Inventore repellendus nesciunt debitis repellat sonata raqer a videna mareta paulona markaEt" ,
          text : "nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero" ,

        },
      ]

      const images =[
        {
          id:'first' ,
          img : imgDep1 ,
          info : "infoimg1" ,
        },
        {
          id:'second' ,
          img : imgDep2 ,
          info : "infoimg2" ,
        },
        {
          id:'third' ,
          img : imgDep3 ,
          info : "infoimg3" ,
        },
        {
          id:'fourth' ,
          img : imgDep4 ,
          info :"infoimg4" ,
        },
        {
          id:'fifth' ,
          img : imgDep5,
          info : "infoimg5" ,
        },
      ]



  return (
    <section className='main-padding py-4'id='department' >
         <MainTitleHeader h2='Departments' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit' />
         <TabComponent active='first' tabs={tabs} content={content} images={images} />
        
    </section>
  )
}

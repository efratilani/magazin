import axios from 'axios';
import dogs from '../images/dogs.jpg';
import points from '../images/points.jpg';
import train from '../images/train.jpg';
export  function getAllPosts(){
    return [
        {category:"sport",title: "mondial 2021", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
        {category:"cooking",title: "children shefs", content:"take your children into the magic world of the cooking! cooking and baking with children...",image:points},
        {category:"buisness",title: "the secret of the big boss", content:"dont afraid to try...",image:train},
        {category:"sport",title: "the new busketBall chempion", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
        {category:"cooking",title: "healthy choclate?", content:"take your children into the magic world of the cooking! cooking and baking with children...",image:points},
        {category:"buisness",title: "fix other's mistakes- we cant say it's gonna be easy...", content:"dont afraid to try...",image:train}
        ,
        {category:"sport",title: "mondial 2021", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
        {category:"cooking",title: "children shefs", content:"take your children into the magic world of the cooking! cooking and baking with children...",image:points},
        {category:"buisness",title: "the secret of the big boss", content:"dont afraid to try...",image:train},
        {category:"sport",title: "the new busketBall chempion", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
        {category:"cooking",title: "healthy choclate?", content:"take your children into the magic world of the cooking! cooking and baking with children...",image:points},
        {category:"buisness",title: "fix other's mistakes- we cant say it's gonna be easy...", content:"dont afraid to try...",image:train}
       , {category:"sport",title: "mondial 2021", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
        {category:"cooking",title: "children shefs", content:"take your children into the magic world of the cooking! cooking and baking with children...",image:points},
        {category:"buisness",title: "the secret of the big boss", content:"dont afraid to try...",image:train},
        {category:"sport",title: "the new busketBall chempion", content:"Actualy I am not sure if there is mondial this year and even if it suposed to be- I'm sure it didnt happend...",image:dogs},
       
      ]
}
import React from 'react'
import happy from "./images/Happy.jpeg"
import sad from "./images/Sadness.jpeg"
import anger from "./images/Anger.jpeg"
import fear from "./images/Fear.jpeg"
import disgust from "./images/Disgusted.jpeg"
import shame from "./images/Shame.jpeg"
import neutral from "./images/Neutral.jpeg"
import surprise from "./images/Surprise.jpeg"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'

function Mood() {
  const navigate = useNavigate();
  return ( 
  <>
   <div>
   <p class="w-full font-serif font-extralight text-5xl text-center text-brown-700">Here's your moodboard to understand what you're feeling!</p>
   </div>
   <div class=" absolute top-10 p-10 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
    <div>
     {/* Card 1 */}
        <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125">
            <img
              src={happy}
              alt="Happy" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are Happy!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* Being creative is an art in it's self and you tend to have out of the box thinking. */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>

      {/* Card 2 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125">
            <img
              src={sad}
              alt="sadness" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are sad!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
            {/* Along with your creative mind you also tend to deeply focus on things and have very good observational skills! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>

      {/* Card 3 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={anger}
              alt="anger" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are angry!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* Everyone has different goals and so do you! You tend to be goal oriented */}
              {/* and when you start something, you never leave it hanging! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>

      {/* Card 4 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={fear}
              alt="fear" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are experiencing fear!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* A routine is wherein you like doing things in a certain way and you have  */}
              {/* a great way to manage your time through this! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>

      {/* Card 5 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={disgust}
              alt="disgusted" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are experiencing disgust!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* A routine is wherein you like doing things in a certain way and you have  */}
              {/* a great way to manage your time through this! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>
     {/* Card 6 */}
     <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={shame}
              alt="shame" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are experiencing shame!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* A routine is wherein you like doing things in a certain way and you have  */}
              {/* a great way to manage your time through this! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>
         {/* Card 7 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={neutral}
              alt="neutral" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You feel neutral!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* A routine is wherein you like doing things in a certain way and you have  */}
              {/* a great way to manage your time through this! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>
        {/* Card 8 */}
      <div>
      <Card className="cardheight2 max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={surprise}
              alt="surprise" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are experiencing fear!
            </Typography>
            {/* <Typography variant="lead" color="gray" className="mt-3 font-serif"> */}
              {/* A routine is wherein you like doing things in a certain way and you have  */}
              {/* a great way to manage your time through this! */}
            {/* </Typography> */}
          </CardBody>
        </Card>
      </div>  
      </div>  
      <div class="flex flex-col items-center">
          <button onClick={()=> navigate("/analysis")} class=" rounded-lg bg-red-200 text-brown-900 hover:text-white font-serif text-4xl fixed bottom-0" > Let's help you feel better!</button>
        
        </div>
      
  </>
  )
}

export default Mood
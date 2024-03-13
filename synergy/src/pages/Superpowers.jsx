import React from 'react'
import creative from './images/creative.jpeg'
import routine from './images/routine.jpeg'
import goal from './images/goal2.jpeg'
import focus from './images/focus.jpeg'
import hardwork from './images/ressilient.jpeg'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'
 
export default function Superpowers() {
  const navigate = useNavigate();
  return (
    <><div>
      <p class="w-full font-serif font-extralight text-5xl text-center text-brown-700">You are special!</p>
    </div>
    <div class=" absolute top-10 p-10 grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 ">
    <div>
     {/* Card 1 */}
        <Card className="cardheight max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125">
            <img
              src={creative}
              alt="Creativity" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are creative!
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-serif">
              Being creative is an art in it's self and you tend to have out of the box thinking.
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Card 2 */}
      <div>
      <Card className="cardheight max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125">
            <img
              src={focus}
              alt="Deep Focus" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You focus keenly!
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-serif">
            Along with your creative mind you also tend to deeply focus on things and have very good observational skills!
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Card 3 */}
      <div>
      <Card className="cardheight max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={goal}
              alt="goal" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are goal oriented!
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-serif">
              Everyone has different goals and so do you! You tend to be goal oriented
              and when you start something, you never leave it hanging!
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Card 4 */}
      <div>
      <Card className="cardheight max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={routine}
              alt="routine" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You have a specific routine!
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-serif">
              A routine is wherein you like doing things in a certain way and you have 
              a great way to manage your time through this!
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Card 5 */}
      <div>
      <Card className="cardheight max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none hover:scale-125"
          >
            <img
              src={hardwork}
              alt="harwork" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              You are ressilient!
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-serif">
              Ressilient represnts your strength and you always try to work hard towards your goals.
              You never stray away from them!
            </Typography>
          </CardBody>
        </Card>
      </div>
      </div>  
      <div class="flex flex-col items-center">
          <button onClick={()=> navigate("/analysis")} class=" rounded-lg bg-red-200 text-brown-900 hover:text-white font-serif text-4xl absolute bottom-3  " > Let's get started!</button>
        
        </div>
      
      </>
  );
}
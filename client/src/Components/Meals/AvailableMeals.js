
import {useEffect} from "react"
import Card from '../UI/Card';

import MealItem from './MealItem/MeaItem';
import classes from './AvailableMeals.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { getFood } from '../../redux/actions/foodAction';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];


const AvailableMeals = () => {
  const dispatch=useDispatch()



useEffect(()=>dispatch(getFood()),[])

  const foods=useSelector((state)=>state.foodReducer.foods.food)

  console.log(foods,"trrr")
  const mealsList =  foods && foods.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

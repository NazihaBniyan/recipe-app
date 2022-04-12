import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Dessert from "../components/Dessert";
import Drink from "../components/Drink";
import Pasta from "../components/Pasta";

import Diets from "../components/Diets";
import { motion } from 'framer-motion';
import React from 'react'

function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Veggie />
            <Popular />
            <Dessert />
            <Diets />
            <Drink />
            <Pasta />
  
        </motion.div>
    )
}

export default Home
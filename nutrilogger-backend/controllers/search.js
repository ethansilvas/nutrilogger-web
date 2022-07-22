import Food from "../models/food.js";

export const getSearch = async (req, res) => {
    try {
        console.log(req);
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.FOOD_API_KEY}&query=${req.query.searchQuery}`)
        const data = await response.json();

        res.json({ data: data });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

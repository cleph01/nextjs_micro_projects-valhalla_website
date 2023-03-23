import { menuData } from "@/data/menuData";
import styles from "@/styles/SuggestedItems.module.css";
import MenuItem from "./MenuItem";

const SuggestedItems = ({ keyword, id }) => {
    const genRandomSuggestions = () => {
        const randomNums = new Set();

        const suggestions = [...Array(3)].map((elem) => {
            let randomNum = Math.floor(
                Math.random() * menuData[keyword]?.length
            );

            while (
                randomNums.has(randomNum) ||
                menuData[keyword][randomNum].id === id
            ) {
                randomNum = Math.floor(
                    Math.random() * menuData[keyword]?.length
                );
            }

            const suggestedItem = {
                id: menuData[keyword][randomNum]?.id,
                item: menuData[keyword][randomNum]?.item,
                description: menuData[keyword][randomNum]?.description,
                price: menuData[keyword][randomNum]?.price,
                rating: 5,
                reviews: 7,
            };

            randomNums.add(randomNum);

            return suggestedItem;
        });

        return suggestions;
    };

    return (
        <>
            <h2> Similar items you may like: </h2>

            <div className={styles.container_box}>
                {genRandomSuggestions()?.map((item, idx) => (
                    <MenuItem key={idx} keyword={keyword} item={item} />
                ))}
            </div>
        </>
    );
};

export default SuggestedItems;

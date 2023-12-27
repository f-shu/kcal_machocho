document.addEventListener('DOMContentLoaded', function () {
    // 食材のデータベース
    const foodData = {
        apple: { protein: 0.3, fat: 0.2, carbs: 19, grams: 100 },
        banana: { protein: 1.3, fat: 0.3, carbs: 27, grams: 100 },
        chicken: { protein: 25, fat: 12, carbs: 0, grams: 100 },
        // 他の食材も追加
    };

    function calculateCalories() {
        const foodName = document.getElementById('food').value;
        const grams = parseFloat(document.getElementById('grams').value) || 0;

        if (!foodData[foodName]) {
            alert('Invalid food selection.');
            return;
        }

        const { protein, fat, carbs } = foodData[foodName];
        const calories = (4 * protein + 9 * fat + 4 * carbs) * (grams / 100);

        document.getElementById('result').innerText = `Calories: ${calories.toFixed(2)}`;
    }

    // ボタンにクリックイベントを追加
    document.getElementById('calculateButton').addEventListener('click', calculateCalories);
});
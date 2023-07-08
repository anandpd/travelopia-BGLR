

export const formSelectionData = {
    placesToVisit: {
        heading: "Where do you want to go?",
        options: ["Himachal Pradesh", "Meghalya", "Goa", "Sikkim", "Arunachal Pradesh", "Chennai", "Bangalore"],
        canSelectMultiple: true,
        key: "places"
    },
    intrests: {
        heading: "Your intrests?",
        options: [
            "Adventure & Outdoors",
            "Heritage & Culture",
            "Nature & Landscapes",
            "Wildlife & Safaris",
            "Wine & Food",
            "Beaches"
        ],
        canSelectMultiple: true,
        key: "intrests"
    },
    count: {
        heading: "No of travelers?",
        options: ["1", "2", "3", "4", "5", "6", "6+"],
        canSelectMultiple: false,
        key: "count"
    },
    budget: {
        heading: "Budget /person",
        options: ["Rs 4000 - 5000", "Rs 5000 - 6000", "Rs 6000 - 7000", "Rs 7000+"],
        canSelectMultiple: false,
        key: "budget"
    }
};
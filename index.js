// Code your solution here
function findMatching(drivers, nameSearch){
    return drivers.filter((name)=>
        name.toLowerCase() === nameSearch.toLowerCase()
    )
}

function fuzzyMatch(drivers, nameSearch){
    return drivers.filter((name)=>
        name.toLowerCase()[0] === nameSearch.toLowerCase()[0]
    )
}
function matchName(drivers, nameSearch){
    return drivers.filter((driver)=>
        driver.name.toLowerCase() === nameSearch.toLowerCase()
    )
}
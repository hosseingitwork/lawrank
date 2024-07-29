
const events = [
    {
        'title': 'PERSONAL INJURY CASE',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing .',
        'budget': '$10 MILLION',
        'last-title': 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        'title': 'PERSONAL INJURY CASE',
        'description': 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem .',
        'budget': '$20 MILLION',
        'last-title': 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        'title': 'PERSONAL INJURY CASE',
        'description': 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem .',
        'budget': '$30 MILLION',
        'last-title': 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    }
]


// function to print all events
const print_events = (events) => {

    var casses_box = document.getElementsByClassName('casses-box')[0]

    casses_box.innerHTML = '';
    
    for (let index = 0; index < events.length; index++){
        var box = document.createElement('div')
        box.className= 'case-box'

        var element = events[index]

        box.innerHTML = `
        <div class="category-result">${element.title}</div>
        <div class="description-last-title">${element.description}</div>
        <div class="category-result">RESULT</div>
        <div class="amount">${element.budget}</div>
        <div class="description-last-title" style=" margin-bottom: 0 !important;">${element['last-title']}</div>
        `    
        casses_box.appendChild(box);
    }
}

// function modify event list
const previosEvent = () => {
    // Remove the last element and store it in a variable
    const lastElement = events.pop();
    // Add the last element to the beginning of the array
    events.unshift(lastElement);

    print_events(events)
}

const nextEvent = () => {

    // Remove the first element and store it in a variable
    const firstElement = events.shift();

    // Add the first element to the end of the array
    events.push(firstElement);
    print_events(events)

}

print_events(events)

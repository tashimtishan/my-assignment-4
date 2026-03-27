1.what is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is use to select a single element by its unique ID, so it always return only one element. getElementsByClassName is used to select multiple elements that share the same class name, and it returns a collection of elements. On the other hand, querySelector and querySelectorAll are more flexible because they use CSS selectors. querySelector returns the first matching element, while querySelectorAll returns all matching elements.

2.how do you create and insert a new element into the DOM?

to creat a new element, you first use document.createElement(). after that, you can add text, attributes, or styles to it. Finally, you insert it into the DOM using methods like appendChild() or append(). Basically, the process is create the element, customize it, and then add it to the page.

3.What is Event Bubbling? And how does it work?

Event bubbling is a concept where an event start from the target element and then moves upward through its parent elements. For example, if you click a button inside a div, the click event will first trigger on the button, then on the div, then on the body, and so on. This happens automatically unless it is stopped.

4.what is Event Delegation in JavaScript? Why is it useful?

event delgation is a technique where you add a single event listener to a parent element instead of adding separate listeners to each child. the parent listens for events and checks which child triggered it. This is useful because it improves performance, reduces the number of event listeners, and also works for elements that are added dynamically later.

5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used to stop the browser default behavior, such as preventing a form from submitting or a link from opening. stopPropagation() is used to stop the event from moving up the DOM tree during event bubbling. In simple terms, one stops the default action, and the other stops the event flow.
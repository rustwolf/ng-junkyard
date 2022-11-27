### Angular Interview Questions.

1. What is Angular ?

Angualar is Javascript Framework, primarily used to build web applications and can also be used to do build hybrid mobile applications. It is written in Typescript and compiles to JS when built for web.
Angular framework has most of the primitive tools used in web built in like Components, Routing, HTTP and much more. 
It makes writing web applications simplar and easy


2. What is the difference between Component and Directive.

Component is used to create components, Directive is used add behaviour to existing components. 
Components are created using @componnent decorator. Directive is created using @Directive decorator.

3. What is a template. 
The template in angular holds your view part. It contains the html that will be eventually be rendered to the user. It is created either in a separate file and liked to a component via templateUrl property. or can be in inlined using template. 


4. Lifecycle hooks. 

Lifecycle hooks are the methods in the component that are fired by the framework at different instances of the lifecyle of the component. Here is the order to it. 
> 1. Constructor. 
> 2. ngOnChanges
> 3. ngOnInit
> 4. ngDoCheck.
> 5. ngAfterViewInit (This is called after the components and children are rendered on DOM)
> 6. ngOnDestroy.
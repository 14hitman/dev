ngOnInit() {
    let observableResult=  this.service.Select();
    observableResult.subscribe((result)=>{
    console.log(result);
    this.emps = result;
  });
}
ngOnInit() {
    let observableResult=  this.service.Select();
    observableResult.subscribe((result)=>{
    console.log(result);
    this.emps = result;
  });
}
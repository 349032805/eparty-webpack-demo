export default class UserListsCtrl{
    constructor($http){
        this.totalItems =70;
        this.$http=$http;
        this.userLists=[
            {
                id:1,
                name:"程良",
                jnumber:"0411111",
                role:"产品",
                department:"产品部们",
                account:"chenliang4@51eparty.com",
                state:"正常"
            },
            {
                id:1,
                name:"程良",
                jnumber:"0411111",
                role:"产品",
                department:"产品部",
                account:"chenliang4@51eparty.com",
                state:"正常"
            },
            {
                id:1,
                name:"程良",
                jnumber:"0411111",
                role:"产品",
                department:"产品部",
                account:"chenliang4@51eparty.com",
                state:"正常"
            },
            {
                id:1,
                name:"程良",
                jnumber:"0411111",
                role:"产品",
                department:"产品部",
                account:"chenliang4@51eparty.com",
                state:"正常"
            }
        ]
    }
    addAccount(){
        this.$http({
            url:'http://10.15.111.5:8080/user/list.htm',
            method:'GET'
        }).then(function(data){
            console.log(data);
        },function(err){
            console.log(err);
        })
    }
    pageChanged() {
        console.log('Page changed to: ' + this.currentPage);
    };
}
UserListsCtrl.$inject=['$http']
module events{
	
	export var dispatch = ( type , data = null) => {
		events.__ins.dispatchEvent(new events.CustomEvent(type , data));
	}

	export var register = ( type , listener , thisObj) => {
		events.__ins.addEventListener( type , listener , thisObj);
	}

	export class CustomEvent extends egret.Event{
    	public data : any;
    	public constructor(type: string, data: any,bubbles: boolean = false,cancelable: boolean = false){
            super(type,bubbles,cancelable);
            this.data = data;
	    }
	}

	export var __ins:egret.EventDispatcher = new egret.EventDispatcher();
}
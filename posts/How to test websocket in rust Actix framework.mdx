---
title: How to test websocket in rust Actix framework
story: >-
  //gist.githubusercontent.com/dipsywong98/fa2a1687f23d03cb006bae86df92548f/raw/a4cc863fb11f7e89e85979693bf2e9df927ac47b/How%2520to%2520test%2520websocket%2520in%2520rust%2520Actix%2520framework.md
tags:
  - Rust
  - test
  - actix
  - websocket
id: How%20to%20test%20websocket%20in%20rust%20Actix%20framework
date: 2023-04-30

---
# How to test websocket in rust Actix framework

It is taking a lot of time to research how to properly test websocket in Actix framework, because their docs, googling and ChatGPT didnt give me answers that works for me. I am not sure is it my googling skill problem or not many people are not asking the same problem as what i did, anyway i found the solution inside actix's source code. I didnt find that in actix's documentation page so i think i better write my findings down and hopefully this can help others who are facing the same problem. First let me share what I have found and what are their problem. Please correct me if my findings are not accurate as I am just a beginner to Rust and Actix.

1. Some are like spinning up a separate server and separete process to test against the server, this will work but not as clean, breakpointing at the server doesnt imply breakpointing in the testing process, there might be side effect for example timeout logic in test etc. And need spin up the server before running test and close the server after that is also a bit cumbersome. But yeah at least most of time just i am not feeling satified yet.
2. Some are like spinning up a server inside the test case functions. Seems spinning up the server is blocking, so need to spin up the server in separate thread. Then the tests and the server are running concurrently, how ever what if the test started opening the websocket before the server starts accepting connection? This part is a bit tricky and i would rather use the first method. It is because if the test set up is too complicated, when it fails I cannot tell is it the set up failing or server implementation is failing.


## How i found the method i wanted

So i dig the source code to see if there exists test cases on ws written definitely by Actix developers and i am not disappointed. There is! Source code digging is always the last resort if googling doesnt help. If source code digging didnt work, probably it is impossible to do it in the way you want currently...

So i found the original code in https://github.com/actix/actix-web/blob/master/actix-web-actors/tests/test_ws.rs and i kept only the crutial ones here to demostrate how the test works.

```rust
//test_ws.rs


#[cfg(test)]
mod tests_main {

    use crate::create_app; // this is where my server implementation is
    use actix_http::ws;
    use actix_web::web::Bytes;

    use futures_util::{SinkExt as _, StreamExt as _}; // this is needed for send method in Framed

    #[actix_web::test]
    async fn test_websocket1() {
        
        // this is to create a test server without really make it listening on some port
        let mut srv = actix_test::start(create_app);

        // open a websocket connection to the test server
        let mut framed = srv.ws_at("/ws").await.unwrap();

       // send message to the test server through the ws
       framed.send(ws::Message::Text("text".into())).await.unwrap();
        // await the server to reply
        let item = framed.next().await.unwrap().unwrap();
        
        // assert what the server replied
        assert_eq!(item, ws::Frame::Text(Bytes::from_static(b"send: text")));
    }
}
```

As for the actual server impl, it is just ordinary websocket implementation available in actix official documentation. https://actix.rs/docs/websockets/ The only twist is that i extracted the `create_app` method so that  we can use the same server factory in our test cases.

```rust showLineNumbers
// main.rs

use actix::{Actor, StreamHandler};
use actix_http::body::BoxBody;
use actix_web::dev::{ServiceFactory, ServiceRequest, ServiceResponse};
use actix_web::Error;
use actix_web::{web, App, HttpRequest, HttpResponse, HttpServer};
use actix_web_actors::ws;

struct MyWs;

impl Actor for MyWs {
    type Context = ws::WebsocketContext<Self>;
}

/// Handler for ws::Message message
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for MyWs {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Ping(msg)) => ctx.pong(&msg),
            Ok(ws::Message::Text(text)) => ctx.text(format!("send: {}", text)),
            Ok(ws::Message::Binary(bin)) => ctx.binary(bin),
            _ => (),
        }
    }
}

async fn index(req: HttpRequest, stream: web::Payload) -> Result<HttpResponse, Error> {
    let resp = ws::start(MyWs {}, &req, stream);
    println!("{:?}", resp);
    resp
}

pub fn create_app() -> App<
    impl ServiceFactory<
        ServiceRequest,
        Response = ServiceResponse<BoxBody>,
        Config = (),
        InitError = (),
        Error = Error,
    >,
> {
    App::new()
        .route("/ws", web::get().to(index))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(create_app)
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}

mod test_ws;
```

I hope this write up can help with your project. Good luck!

A full working repo is here, it also includes test case for ordinary restful endpoints, CI, pre-commit-hooks and more. Check it out if you are interested! https://github.com/dipsywong98/actix-test

    
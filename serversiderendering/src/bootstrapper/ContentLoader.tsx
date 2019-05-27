import * as React from "react";
import * as ReactDOM from "react-dom";
import { TravelDestinationList } from "../components/TravelDestinationList";
import { ITravelCardProps } from "../interfaces/ITravelCardProps";
import { TopLevelNav } from "../components/TopLevelNav";
import { IS_APP_PREDENDERER } from "./AppConfig";

export class ContentLoader {

  public static Render(): void {
    const navRoot = document.getElementById("topLevelNav");
    if(!IS_APP_PREDENDERER || navRoot.dataset["prerender"] == "1") {
      ContentLoader.RenderNav(navRoot);
    }

    const travelCardsRoot = document.getElementById("content");
    if(!IS_APP_PREDENDERER || travelCardsRoot.dataset["prerender"] == "1")
    ContentLoader.RenderTravel(travelCardsRoot)
  }

  private static RenderNav(root: HTMLElement) {
    if(root.children.length > 0 ) {
      return;
    }

    ReactDOM.render(
      <TopLevelNav />,
      root
    );
  }

  private static RenderTravel(root: HTMLElement) {
    if(root.children.length > 0 ) {
      return;
    }
    
    var opts = {
      method: 'GET',
      headers: {}
    };
    fetch('http://localhost:8081/trips/', opts).then(function (response) {
      return response.json();
    })
      .then(function (body) {
        const list = (body as ITravelCardProps[]);
        ReactDOM.render(
          <TravelDestinationList list={list} />,
          root
        );
      });
  }
}
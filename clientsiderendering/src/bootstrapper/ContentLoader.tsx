import * as React from "react";
import * as ReactDOM from "react-dom";

import { TravelDestinationList } from "../components/TravelDestinationList";
import { ITravelCardProps } from "../interfaces/ITravelCardProps";
import { TopLevelNav } from "../components/TopLevelNav";


export class ContentLoader {

  public static Render(): void {
    ContentLoader.RenderNav(/*root*/document.getElementById("topLevelNav"))
    ContentLoader.RenderTravel(/*root*/document.getElementById("content"))
  }

  private static RenderNav(root: HTMLElement) {
    ReactDOM.render(
      <TopLevelNav />,
      root
    );
  }

  private static RenderTravel(root: HTMLElement) {
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
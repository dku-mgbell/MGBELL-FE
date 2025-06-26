declare namespace naver {
  export namespace maps {
    export class Map {
      constructor(element: string | HTMLElement, options?: MapOptions);

      setCenter(location: LatLng): void;

      setZoom(level: number, animate?: boolean): void;

      morph(position: LatLng, zoom?: number, options?: MorphOptions): void;
      // 필요한 다른 메서드들도 추가할 수 있습니다
    }

    export class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    export interface MapOptions {
      center?: LatLng;
      zoom?: number;
      minZoom?: number;
      maxZoom?: number;
      zoomControl?: boolean;
      zoomControlOptions?: {
        position: Position;
      };
    }

    export enum Position {
      TOP_LEFT,
      TOP_CENTER,
      TOP_RIGHT,
      LEFT_TOP,
      LEFT_CENTER,
      LEFT_BOTTOM,
      RIGHT_TOP,
      RIGHT_CENTER,
      RIGHT_BOTTOM,
      BOTTOM_LEFT,
      BOTTOM_CENTER,
      BOTTOM_RIGHT,
    }

    export interface MorphOptions {
      duration?: number;
      easing?: string;
      complete?: () => void;
    }

    export class Marker {
      constructor(options: MarkerOptions);

      setMap(map: Map | null): void;

      setPosition(position: LatLng): void;

      setVisible(visible: boolean): void;

      getPosition(): LatLng;
    }

    export interface MarkerOptions {
      position: LatLng;
      map?: Map;
      icon?: string | ImageIcon | HtmlIcon;
      title?: string;
      visible?: boolean;
      zIndex?: number;
      clickable?: boolean;
    }

    export interface ImageIcon {
      url: string;
      size?: Size;
      origin?: Point;
      anchor?: Point;
    }

    export interface HtmlIcon {
      content: string;
      size: Size;
      anchor?: Point;
    }

    export class Size {
      constructor(width: number, height: number);

      width: number;

      height: number;
    }

    export class Point {
      constructor(x: number, y: number);

      x: number;

      y: number;
    }

    export class Event {
      static addListener(
        target: Map | Marker,
        eventName: string,
        listener: (...args: any[]) => void,
      ): MapEventListener;

      static removeListener(listener: MapEventListener): void;

      static once(
        target: Map | Marker,
        eventName: string,
        listener: (...args: any[]) => void,
      ): MapEventListener;

      static clearListeners(target: Map | Marker, eventName?: string): void;

      static trigger(
        target: Map | Marker,
        eventName: string,
        ...args: any[]
      ): void;
    }

    export interface MapEventListener {
      target: Map | Marker;
      eventName: string;
      listener: (...args: any[]) => void;
    }
  }
}

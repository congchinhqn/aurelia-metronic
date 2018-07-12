import { inject } from "aurelia-framework";
import { AureliaConfiguration } from 'aurelia-configuration';
import { HttpClient, HttpResponseMessage } from 'aurelia-http-client';

@inject(HttpClient, AureliaConfiguration)
export class WebApiServices {

  constructor(private http: HttpClient,
    private config: AureliaConfiguration) {
    this.http.configure(x => {
      x.withBaseUrl(config.get('api.endpoint'));
      x.withHeader('Accept', 'application/json');
      x.withHeader('Content-Type', 'application/json');
    });
  }

  public get(url: string): Promise<HttpResponseMessage> {
    return new Promise((resolve, reject) => {
      this.http.get(url).then(data => {
        resolve(data);
      });
    });
  }
  public post(url: string, content: any): Promise<HttpResponseMessage>{
    return new Promise((resolve, reject) => {
      this.http.post(url, content).then(data => {
        resolve(data);
      });
    });
  }
  public put(url: string, content: any): Promise<HttpResponseMessage>{
    return new Promise((resolve, reject) => {
      this.http.put(url, content).then(data => {
        resolve(data);
      });
    });
  }
  public patch(url: string, content: any): Promise<HttpResponseMessage>{
    return new Promise((resolve, reject) => {
      this.http.patch(url, content).then(data => {
        resolve(data);
      });
    });
  }
  public delete(url: string): Promise<HttpResponseMessage>{
    return new Promise((resolve, reject) => {
      this.http.delete(url).then(data => {
        resolve(data);
      });
    });
  }
}

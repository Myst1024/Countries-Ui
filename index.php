<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

//TODO set limit to 50 once completed
const RESPONSE_LIMIT = 50;
const API_FIELD_LIST = "name;alpha2Code;alpha3Code;flag;region;subregion;population;languages";


parse_str($_SERVER['QUERY_STRING'], $userParams);
handleRequest($userParams);

function handleRequest($userParams) {
    // All responses returned in JSON format
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");

    $countriesParams = ['fields' => API_FIELD_LIST];

    $requestQuery = $userParams['query'];
    if (strlen($requestQuery) === 0) {
        echo json_encode(['error' => 'Query string missing or invalid']);
        return;
    }

    $requestType = $userParams['type'];
    if (in_array($requestType, ["name", "fullName", "code"])) {
        if ($requestType === "fullName") {
            $requestType = "name";
            $countriesParams['fullText'] = "true";
        } else if ($requestType === "code") {
            $requestType = "alpha";
        }
        getCountries($requestType, $requestQuery, $countriesParams);
    } else {
        echo json_encode(['error' => 'Query type missing or invalid']);
    }
}

function getCountries($type, $query, $countriesParams) {
    $client = new Client(['base_uri' => 'https://restcountries.eu/rest/v2/', 'http_errors' => false]);
    $response = $client->request('GET', "$type/$query", [
        'query' => $countriesParams
    ]);
    if ($response->getStatusCode() == 404) {
        echo json_encode(['error' => 'No results found']);
        return;
    }
    $response = json_decode($response->getBody());
    returnCountries((array)$response);
}

function returnCountries($response) {
    //Limiting response count
    $response = array_slice($response,0,RESPONSE_LIMIT);
    echo json_encode($response);
}
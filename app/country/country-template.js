<h2>{{$ctrl.country.name}}</h2>
<h3>Cap. {{$ctrl.country.capital}}</h3>
<h4><em>{{$ctrl.country.population | number}} inhab.</em></h4>
<p>{{$ctrl.country.borders.join(', ')}}</p>
<div class="btn-container">
  <a data-ng-click="$ctrl.show($ctrl.country)" class="btn btn-primary">View on map</a>
</div>

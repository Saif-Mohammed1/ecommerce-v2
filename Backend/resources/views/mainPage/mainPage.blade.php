<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

<h1 class="p-4">Create Product</h1>






<form action="{{ route('home.store') }}" method="POST" class="p-4" enctype="multipart/form-data"> {{-- $products =
    MainPage::select('id', 'title', 'shop', 'imageUrl', 'route')->get(); --}}
    @csrf
    <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text " r placeholder="please enter the title" value="{{old('title')}}" class="form-control"
            name="title">
        @if($errors->has('title'))
        <div class="alert alert-danger">{{ $errors->first('title') }}</div>
        @endif
    </div>

    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" name='shop' value="{{old('shop')}}"
            placeholder="enter the name e.g. shop now.....etc">
        @if($errors->has('shop'))
        <div class="alert alert-danger">{{ $errors->first('shop') }}</div>
        @endif
    </div>

    <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" r type="file" id="formFile" name="imageFile">
        @if($errors->has('imageFile'))
        <div class="alert alert-danger">{{ $errors->first('imageFile') }}</div>
        @endif
    </div>

    <div class="mb-3">
        <label class="form-label">Route</label>
        <input type="text" class="form-control" r placeholder="enter the link of category" name="route"
            value="{{ old('route') }}">
        @if($errors->has('route'))
        <div class="alert alert-danger">{{ $errors->first('route') }}</div>
        @endif
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
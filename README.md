## Laravel Nova Checkboxes Field

### install
```
composer require mmerlijn/nova-checkboxes-field
```

### Usage
```php
use \mmerlijn\NovaCheckboxesField\Checkboxes;

Checkboxes::make('Roles')->options([
    1 => 'Admin',
    2=> 'Super user',
]);
```

### config

You can customise how the values from checkbox fields are passed to your scripts. By default it's will cast all numeric keys to floats or integers, e.g. [1, 2, 3] instead of ["1", "2", "3"]. You can save disable this feature by calling withoutTypeCasting() to have the original array keys returned unmodified.
```php
Checkboxes::make('Permissions')->options([
    1 => 'Access Admin UI',
    2 => 'Manage Users',
])->withoutTypeCasting(),
```

### Example
```php
Checkboxes::make('users')
    ->options(App\User::pluck('name', 'id'))
    ->withoutTypeCasting(),
```

### Give permissions to user

Add to fields
```php
Checkboxes::make('Permissions','permissionArray') 
    ->options(Permission::pluck('name', 'id')->toArray())
    ->hideFromIndex(),
```
Add to User model
```php
public function setPermissionArrayAttribute(array $value)
{
    $this->permissions()->sync($value);
}
public function getPermissionArrayAttribute()
{
    return $this->permissions->map(fn($item) => $item->pivot->permission_id)->toArray();
}
```

### Only for developing
Make changes after nova update
```bash
cd vendor/laravel/nova && npm install
```



### Credits to
[Silvanite](https://github.com/Silvanite/novafieldcheckboxes)

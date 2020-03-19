# 配置文件加载优先级

SpringBoot对于所加载的多个配置文件，会进行合并共存。如果配置文件之间有冲突，规则是冲突部分高优先级的配置覆盖低优先级的配置。而加载的地方有多个，常见的地方，优先级从高到低有（[spring官网文档](https://docs.spring.io/spring-boot/docs/1.5.9.RELEASE/reference/htmlsingle/#boot-features-external-config)）：
1. 命令行参数`java -jar app.jar --server.port=8087 --配置=值`
2. jar包外部的application-{profile}.properties/yml配置文件
3. jar包内部的application-{profile}.properties/yml配置文件
4. jar包外部的application.properties/yml配置文件
5. jar包内部的application.properties/yml配置文件
6. @Configuration注解类上的@PropertySource
7. 通过SpringApplication.setDefaultProperties指定的默认属性

因此，最常见的四个路径：`file:./config/`>`file:./`>`classpath:/config/`>`classpath:/`，有profile高于没profile，properties高于yaml。配置文件路径的优先级高于配置文件类型。也就是说，如果有两个配置文件：`classpath:/config/application.yml`和`classpath:/application.properties`。此时yaml优先级高于properties。

# 配置的使用与装配

要使用配置文件的配置，可以使用@ConfigurationProperties和@Value这两个注解加载配置

配置文件
```properties
user.username=admin
user.password=123456
```

使用@ConfigurationProperties
```java
@Configuration
@ConfigurationProperties(prefix = "user")
public class User {
    private String username;
    private String password;
    ...getter,setter
}
```

使用@Value
```java
@Configuration
public class User {
    @Value("user.username")
    private String username;
    @Value("user.password")
    private String password;
    ...getter,setter
}
```

# 加载指定的配置文件

要加载指定的配置文件，需要使用@PropertySource注解，使用：
```java
@PropertySource(value = {"classpath:user.properties","classpath:admin.properties"})
@Configuration
@ConfigurationProperties(prefix = "user")
public class User {
    private String username;
    private String password;
    ...getter,setter
}
```

@PropertySource注解：
```java
public @interface PropertySource {
    //指定一个配置文件
	String name() default "";
    //指定多个配置文件，如果多个配置文件直接配置冲突，从左往右，右边优先级高
	String[] value();
    //如果配置文件没找着，是否忽略
	boolean ignoreResourceNotFound() default false;
    //配置文件编码
	String encoding() default "";
    //配置文件的解析工厂
	Class<? extends PropertySourceFactory> factory() default PropertySourceFactory.class;
}
```

其中比较有趣的是配置文件的解析工厂，默认是PropertySourceFactory，是个接口，其唯一的实现是DefaultPropertySourceFactory：
```java
public class DefaultPropertySourceFactory implements PropertySourceFactory {
	@Override
	public PropertySource<?> createPropertySource(@Nullable String name, EncodedResource resource) throws IOException {
		return (name != null ? new ResourcePropertySource(name, resource) : new ResourcePropertySource(resource));
	}
}
```

可以看到使用的是ResourcePropertySource进行解析，可以解析properties和xml，所以@PropertySource不支持yaml。所以如果要支持yaml，需要自己实现PropertySourceFactory，在@PropertySource里指定。

```java
public class MyYamlPropertySourceFactory implements PropertySourceFactory {
	@Override
	public PropertySource<?> createPropertySource(@Nullable String name, EncodedResource resource) throws IOException {
		return return new YamlPropertySourceLoader().load(name, resource).get(0);
	}
}
```

除此以外，还可以通过PropertyPlaceholderConfigurer支持加载yaml文件。PropertyPlaceholderConfigurer的作用是给代码中${}占位符赋值，可以给PropertyPlaceholderConfigurer设置yaml解析。
```java
@Bean
public static PropertySourcesPlaceholderConfigurer properties() {
	PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer = new PropertySourcesPlaceholderConfigurer();
	YamlPropertiesFactoryBean yaml = new YamlPropertiesFactoryBean();
	yaml.setResources(new ClassPathResource("simple.yml"));
	propertySourcesPlaceholderConfigurer.setProperties(yaml.getObject());
	return propertySourcesPlaceholderConfigurer;
}
```



参考文章

[Spring Boot 的配置文件优先级](https://www.scienjus.com/spring-boot-properties-priority/)

[SpringBoot - 配置文件加载位置与优先级](https://blog.csdn.net/J080624/article/details/80508606)

[SpringBoot配置加载，各配置文件优先级对比](https://blog.csdn.net/IT_faquir/article/details/80869578)

[深入理解spring注解@PropertySource的实现原理](https://blog.csdn.net/lipei1220/article/details/94593836)
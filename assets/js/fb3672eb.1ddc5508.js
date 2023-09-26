"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[39227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},17770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"quill-vs-cassandra",title:"Quill vs. Cassandra"},i=void 0,s={unversionedId:"zio-quill/quill-vs-cassandra",id:"zio-quill/quill-vs-cassandra",title:"Quill vs. Cassandra",description:"This document compares Quill to the Datastax Java driver and the Phantom library. This is an incomplete comparison, additions and corrections are welcome.",source:"@site/docs/zio-quill/quill-vs-cassandra.md",sourceDirName:"zio-quill",slug:"/zio-quill/quill-vs-cassandra",permalink:"/zio-quill/quill-vs-cassandra",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-quill/quill-vs-cassandra.md",tags:[],version:"current",frontMatter:{id:"quill-vs-cassandra",title:"Quill vs. Cassandra"},sidebar:"ecosystem-sidebar",previous:{title:"Additional Resources",permalink:"/zio-quill/additional-resources"},next:{title:"Quill vs. Slick",permalink:"/zio-quill/quill-vs-slick"}},l={},c=[{value:"Index",id:"index",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Abstraction level",id:"abstraction-level",level:2},{value:"Simple queries",id:"simple-queries",level:2},{value:"Composable queries",id:"composable-queries",level:2},{value:"Extensibility",id:"extensibility",level:2},{value:"Custom data types",id:"custom-data-types",level:2},{value:"Non-blocking IO",id:"non-blocking-io",level:2},{value:"Other considerations",id:"other-considerations",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document compares Quill to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datastax/java-driver"},"Datastax Java")," driver and the ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20141229171448/http://websudos.github.io:80/phantom"},"Phantom")," library. This is an incomplete comparison, additions and corrections are welcome."),(0,a.kt)("p",null,"All examples have been properly tested, and they should work out of the box."),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#abstraction-level"},"Abstraction level")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#simple-queries"},"Simple queries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#composable-queries"},"Composable queries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extensibility"},"Extensibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-data-types"},"Custom data types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#non-blocking-io"},"Non-blocking IO")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#other-considerations"},"Other considerations"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The keyspace and column family needed for all examples are defined in this CQL script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE KEYSPACE IF NOT EXISTS db\nWITH replication = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };\n\nCREATE TABLE IF NOT EXISTS db.weather_station (\n  country TEXT,\n  city TEXT,\n  station_id TEXT,\n  entry INT,\n  value INT,\n  PRIMARY KEY (country, city, station_id)\n);\n")),(0,a.kt)("p",null,"In order to make all Quill examples to work you will need to create this config file, named ",(0,a.kt)("inlineCode",{parentName:"p"},"application.conf")," in your resources folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.keyspace=db\ndb.preparedStatementCacheSize=100\ndb.session.contactPoint=127.0.0.1\ndb.session.queryOptions.consistencyLevel=ONE\n")),(0,a.kt)("p",null,"Add your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," dependencies as described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/getquill/quill#cassandra-contexts"},"Cassandra Contexts")),(0,a.kt)("h2",{id:"abstraction-level"},"Abstraction level"),(0,a.kt)("p",null,"The Datastax Java driver provides simple abstractions that let you either write your queries as plain strings or use a declarative Query Builder. It also provides a higher level ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datastax/java-driver/tree/2.1/manual/object_mapper"},"Object Mapper"),". For this comparison we will only use the Query Builder."),(0,a.kt)("p",null,"Although both Quill and Phantom represent column family rows as flat immutable structures (case classes without nested data) and provide a type-safe composable query DSL, they work at a different abstraction level. "),(0,a.kt)("p",null,"Phantom provides an embedded DSL that help you write CQL queries in a type-safe manner. Quill is referred as a Language Integrated Query library to match the available publications on the subject. The paper ",(0,a.kt)("a",{parentName:"p",href:"http://research.microsoft.com/en-us/events/dcp2014/cheney.pdf"},'"Language-integrated query using comprehension syntax: state of the art, open problems, and work in progress"')," has an overview with some of the available implementations of language integrated queries."),(0,a.kt)("h2",{id:"simple-queries"},"Simple queries"),(0,a.kt)("p",null,"This section compares how the different libraries let the user query a column family to obtain some elements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java Driver (v3.0.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.datastax.driver.core._\nimport com.datastax.driver.core.querybuilder.QueryBuilder\nimport com.google.common.cache.{ CacheBuilder, CacheLoader, LoadingCache }\n\nimport scala.jdk.CollectionConverters._\n\nobject JavaDriver extends App {\n\n  val nrOfCacheEntries: Int = 100\n\n  val cluster: Cluster = Cluster.builder().addContactPoints("localhost").build()\n\n  val session: Session = cluster.newSession()\n\n  val cache: LoadingCache[String, PreparedStatement] =\n    CacheBuilder.newBuilder().\n      maximumSize(nrOfCacheEntries).\n      build(\n        new CacheLoader[String, PreparedStatement]() {\n          def load(key: String): PreparedStatement = session.prepare(key.toString)\n        }\n      )\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    def getAllByCountry(cache: LoadingCache[String, PreparedStatement], session: Session)(country: String): List[WeatherStation] = {\n      val query: Statement =\n        QueryBuilder.select().\n          all().\n          from("db", "weather_station").\n          where(QueryBuilder.eq("country", QueryBuilder.bindMarker()))\n\n      session.execute(cache.get(query.toString).bind(country)).all().asScala.map(\n        row => WeatherStation(row.getString("country"), row.getString("city"), row.getString("station_id"), row.getInt("entry"), row.getInt("value"))\n      ).to[List]\n    }\n  }\n\n  val getAllByCountry: String => List[WeatherStation] = WeatherStation.getAllByCountry(cache, session)_\n\n  getAllByCountry("UK")\n\n  session.close()\n  cluster.close()\n}\n')),(0,a.kt)("p",null,"The Java driver requires explicit handling of a ",(0,a.kt)("inlineCode",{parentName:"p"},"PreparedStatement"),"s cache to avoid preparing the same statement more that once, that could affect performance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phantom (v1.22.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.websudos.phantom.connectors.RootConnector\nimport com.websudos.phantom.db._\nimport com.websudos.phantom.dsl._\n\nimport scala.concurrent.Future\n\nobject Phantom extends App {\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  abstract class WeatherStationCF(override val tableName: String) extends CassandraTable[WeatherStationCF, WeatherStation] with RootConnector {\n\n    object country extends StringColumn(this) with PartitionKey[String]\n    object city extends StringColumn(this) with PrimaryKey[String]\n    object stationId extends StringColumn(this) with PrimaryKey[String] {\n      override lazy val name: String = "station_id"\n    }\n    object entry extends IntColumn(this) with PrimaryKey[Int]\n    object value extends IntColumn(this)\n\n    override def fromRow(r: Row): WeatherStation =\n      WeatherStation(country(r), city(r), stationId(r), entry(r), value(r))\n  }\n\n  abstract class WeatherStationQueries extends WeatherStationCF("weather_station") {\n\n    def getAllByCountry(country: String): Future[List[WeatherStation]] =\n      select.where(_.country eqs country).fetch()\n  }\n\n  class DB(ks: KeySpaceDef) extends DatabaseImpl(ks) {\n\n    object stations extends WeatherStationQueries with connector.Connector\n  }\n\n  val db = new DB(ContactPoint.local.keySpace("db"))\n\n  val result = db.stations.getAllByCountry("UK")\n\n  result.onComplete(_ => db.shutdown())\n}\n')),(0,a.kt)("p",null,"Phantom requires mapping classes to lift the database model to DSL types. The query definition also requires special equality operators."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quill")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import io.getquill._\n\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nobject Quill extends App {\n\n  val db = new CassandraAsyncContext(SnakeCase, "db")\n\n  import db._\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    val getAllByCountry = quote {\n      (country: String) =>\n        query[WeatherStation].filter(_.country == country)\n    }\n  }\n\n  val result = db.run(WeatherStation.getAllByCountry(lift("UK")))\n\n  result.onComplete(_ => db.close())\n}\n')),(0,a.kt)("p",null,"During the compilation of this example, as the quotation is known statically, Quill will emit the CQL string as an info message, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT country, city, station_id, entry, value FROM weather_station WHERE country = ?"),"."),(0,a.kt)("h2",{id:"composable-queries"},"Composable queries"),(0,a.kt)("p",null,"This section compares how the different libraries let the user compose queries."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java Driver (v3.0.0)")," "),(0,a.kt)("p",null,"The Query Builder allows the user to partially construct queries and add filters later:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.datastax.driver.core._\nimport com.datastax.driver.core.querybuilder.{ QueryBuilder, Select}\nimport com.google.common.cache.{ CacheBuilder, CacheLoader, LoadingCache }\n\nimport scala.jdk.CollectionConverters._\n\nobject JavaDriver extends App {\n\n  val nrOfCacheEntries: Int = 100\n\n  val cluster: Cluster = Cluster.builder().addContactPoints("localhost").build()\n\n  val session: Session = cluster.newSession()\n\n  val cache: LoadingCache[String, PreparedStatement] =\n    CacheBuilder.newBuilder().\n      maximumSize(nrOfCacheEntries).\n      build(\n        new CacheLoader[String, PreparedStatement]() {\n          def load(key: String): PreparedStatement = session.prepare(key.toString)\n        }\n      )\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    def getAll: Select =\n      QueryBuilder.select().\n        all().\n        from("db", "weather_station")\n\n\n    def getAllByCountry(cache: LoadingCache[String, PreparedStatement], session: Session)(country: String): List[WeatherStation] = {\n      val query: Statement =\n        getAll.\n          where(QueryBuilder.eq("country", QueryBuilder.bindMarker()))\n\n      session.execute(cache.get(query.toString).bind(country)).all().asScala.map(\n        row => WeatherStation(row.getString("country"), row.getString("city"), row.getString("station_id"), row.getInt("entry"), row.getInt("value"))\n      ).to[List]\n    }\n  }\n\n  val getAllByCountry: String => List[WeatherStation] = WeatherStation.getAllByCountry(cache, session)_\n\n  getAllByCountry("UK")\n\n  session.close()\n  cluster.close()\n}\n')),(0,a.kt)("p",null,"The DSL has limited composition compatibility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phantom (v1.22.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.websudos.phantom.connectors.RootConnector\nimport com.websudos.phantom.db._\nimport com.websudos.phantom.dsl._\n\nimport scala.concurrent.Future\n\nobject Phantom extends App {\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  abstract class WeatherStationCF(override val tableName: String) extends CassandraTable[WeatherStationCF, WeatherStation] with RootConnector {\n\n    object country extends StringColumn(this) with PartitionKey[String]\n    object city extends StringColumn(this) with PrimaryKey[String]\n    object stationId extends StringColumn(this) with PrimaryKey[String]\n    object entry extends IntColumn(this) with PrimaryKey[Int]\n    object value extends IntColumn(this)\n\n    override def fromRow(r: Row): WeatherStation =\n      WeatherStation(country(r), city(r), stationId(r), entry(r), value(r))\n  }\n\n  abstract class WeatherStationQueries extends WeatherStationCF("weather_station") {\n\n    def getAllByCountry(country: String): Future[List[WeatherStation]] =\n      findAllByCountry(country).fetch()\n\n    def getAllByCountryAndCity(country: String, city: String): Future[List[WeatherStation]] =\n      findAllByCountryAndCity(country, city).fetch()\n\n    def getAllByCountryCityAndId(country: String, city: String, stationId: String): Future[List[WeatherStation]] =\n      findAllByCountryCityAndId(country, city, stationId).fetch()\n\n    private def findAllByCountry(country: String) =\n      select.where(_.country eqs country)\n\n    private def findAllByCountryAndCity(country: String, city: String) =\n      findAllByCountry(country).and(_.city eqs city)\n\n    private def findAllByCountryCityAndId(country: String, city: String, stationId: String) =\n      findAllByCountryAndCity(country, city).and(_.stationId eqs stationId)\n  }\n\n  class DB(ks: KeySpaceDef) extends DatabaseImpl(ks) {\n\n    object stations extends WeatherStationQueries with connector.Connector\n  }\n\n  val db = new DB(ContactPoint.local.keySpace("db"))\n\n  val result = db.stations.getAllByCountryCityAndId("UK", "London", "SW27")\n\n  result.onComplete(_ => db.shutdown())\n}\n')),(0,a.kt)("p",null,"Phantom allows the user certain level of composability, but it gets a bit verbose due to the nature of the DSL. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quill")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import io.getquill._\n\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nobject Quill extends App {\n\n  val db = new CassandraAsyncContext(SnakeCase, "db")\n\n  import db._\n\n  case class WeatherStation(country: String, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    val getAllByCountry = quote {\n      (country: String) =>\n        query[WeatherStation].filter(_.country == country)\n    }\n\n    val getAllByCountryAndCity = quote {\n      (country: String, city: String) =>\n        getAllByCountry(country).filter(_.city == city)\n    }\n\n    val getAllByCountryCityAndId = quote {\n      (country: String, city: String, stationId: String) =>\n        getAllByCountryAndCity(country, city).filter(_.stationId == stationId)\n    }\n  }\n\n  val result = db.run(WeatherStation.getAllByCountryCityAndId("UK", "London", "SW2"))\n\n  result.onComplete(_ => db.close())\n}\n')),(0,a.kt)("p",null,"Quill offers more advanced composability, but CQL being a much simpler query language than SQL can't benefit much from it. During the compilation of this example, as the quotation is known statically, Quill will emit the CQL string as an info message, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT country, city, station_id, entry, value FROM weather_station WHERE country = ? AND city = ? AND station_id = ?"),"."),(0,a.kt)("h2",{id:"extensibility"},"Extensibility"),(0,a.kt)("p",null,"This section explores the extensibility capabilities of each library ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java Driver (v3.0.0)")),(0,a.kt)("p",null,"There is no much offered by the driver to extend the Query Builder, e.g. add a missing CQL feature."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phantom (v1.22.0)")),(0,a.kt)("p",null,"You could extend Phantom by extending the DSL to add new features, although it might not be a straightforward process."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quill")),(0,a.kt)("p",null,"Quill provides an easy mechanism to add non-supported features through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/getquill/quill#infix"},"infix"),". In fact, most of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/getquill/quill/blob/master/quill-cassandra/src/main/scala/io/getquill/sources/cassandra/ops/package.scala"},"CQL specific features")," are added using infix."),(0,a.kt)("h2",{id:"custom-data-types"},"Custom data types"),(0,a.kt)("p",null,"This section would allow us to compare how the different libraries let us read custom data types in a seamless way."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java Driver (v3.0.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import java.nio.ByteBuffer\nimport java.nio.charset.Charset\n\nimport com.datastax.driver.core._\nimport com.datastax.driver.core.exceptions.InvalidTypeException\nimport com.datastax.driver.core.querybuilder.QueryBuilder\nimport com.datastax.driver.core.utils.Bytes\nimport com.google.common.cache.{ CacheBuilder, CacheLoader, LoadingCache }\n\nimport scala.jdk.CollectionConverters._\n\nobject JavaDriver extends App {\n\n  case class Country(code: String)\n\n  object Country {\n\n    class Codec(charset: Charset) extends TypeCodec[Country](DataType.text(), classOf[Country]) {\n\n      override def serialize(country: Country, protocolVersion: ProtocolVersion): ByteBuffer =\n        if (country == null) null else ByteBuffer.wrap(country.code.getBytes(charset))\n\n      override def parse(value: String): Country =\n        if (value == null || value.isEmpty || value.equalsIgnoreCase("NULL"))\n          null\n        else if (!ParseUtils.isQuoted(value))\n          throw new InvalidTypeException("text or varchar values must be enclosed by single quotes")\n        else Country(ParseUtils.unquote(value))\n\n      override def format(country: Country): String =\n        if (country == null) "NULL"\n        else ParseUtils.quote(country.code)\n\n      override def deserialize(bytes: ByteBuffer, protocolVersion: ProtocolVersion): Country =\n        if (bytes == null) null\n        else if (bytes.remaining == 0) Country("")\n        else Country(new String(Bytes.getArray(bytes), charset))\n    }\n  }\n\n  val nrOfCacheEntries: Int = 100\n\n  val cluster: Cluster = Cluster.builder().addContactPoints("localhost").build()\n\n  cluster.getConfiguration.getCodecRegistry.register(new Country.Codec(Charset.forName("UTF-8")))\n\n  val session: Session = cluster.newSession()\n\n  val cache: LoadingCache[String, PreparedStatement] =\n    CacheBuilder.newBuilder().\n      maximumSize(nrOfCacheEntries).\n      build(\n        new CacheLoader[String, PreparedStatement]() {\n          def load(key: String): PreparedStatement = session.prepare(key.toString)\n        }\n      )\n\n  case class WeatherStation(country: Country, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    def getAllByCountry(cache: LoadingCache[String, PreparedStatement], session: Session)(country: Country): List[WeatherStation] = {\n      val query: Statement =\n        QueryBuilder.select().\n          all().\n          from("db", "weather_station").\n          where(QueryBuilder.eq("country", QueryBuilder.bindMarker()))\n\n      session.execute(cache.get(query.toString).bind(country)).all().asScala.map(\n        row => WeatherStation(row.get("country", classOf[Country]), row.getString("city"), row.getString("station_id"), row.getInt("entry"), row.getInt("value"))\n      ).to[List]\n    }\n  }\n\n  val getAllByCountry: Country => List[WeatherStation] = WeatherStation.getAllByCountry(cache, session)_\n\n  getAllByCountry(Country("UK"))\n\n  session.close()\n  cluster.close()\n}\n')),(0,a.kt)("p",null,"It is necessary to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeCodec")," and register it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CodecRegistry"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phantom (v1.22.0)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import com.websudos.phantom.builder.primitives.Primitive\nimport com.websudos.phantom.builder.query.CQLQuery\nimport com.websudos.phantom.builder.syntax.CQLSyntax\nimport com.websudos.phantom.connectors.RootConnector\nimport com.websudos.phantom.db._\nimport com.websudos.phantom.dsl._\n\nimport scala.concurrent.Future\nimport scala.util.Try\n\nobject Phantom extends App {\n\n  case class Country(code: String) extends AnyVal\n\n  object Country {\n\n    implicit object CountryIsPrimitive extends Primitive[Country] {\n\n      override type PrimitiveType = Country\n\n      override def fromRow(column: String, row: Row): Try[Country] =\n        nullCheck(column, row) {\n          r => Country(r.getString(column))\n        }\n\n      override val cassandraType: String = CQLSyntax.Types.Text\n\n      override def fromString(code: String): Country = Country(code)\n\n      override def asCql(country: Country): String = CQLQuery.empty.singleQuote(country.code)\n\n      override val clz: Class[CountryIsPrimitive.PrimitiveType] = classOf[Country]\n    }\n\n    type Column[Owner <: CassandraTable[Owner, Record], Record] = PrimitiveColumn[Owner, Record, Country]\n  }\n\n  case class WeatherStation(country: Country, city: String, stationId: String, entry: Int, value: Int)\n\n  case class People(name: String, age: Int)\n\n  abstract class WeatherStationCF(override val tableName: String) extends CassandraTable[WeatherStationCF, WeatherStation] with RootConnector {\n\n    object country extends Country.Column(this) with PartitionKey[Country]\n    object city extends StringColumn(this) with PrimaryKey[String]\n    object stationId extends StringColumn(this) with PrimaryKey[String] {\n      override lazy val name: String = "station_id"\n    }\n    object entry extends IntColumn(this) with PrimaryKey[Int]\n    object value extends IntColumn(this)\n\n    override def fromRow(r: Row): WeatherStation =\n      WeatherStation(country(r), city(r), stationId(r), entry(r), value(r))\n  }\n\n  abstract class WeatherStationQueries extends WeatherStationCF("weather_station") {\n\n    def getAllByCountry(country: Country): Future[List[WeatherStation]] =\n      select.where(_.country eqs country).fetch()\n  }\n\n  class DB(ks: KeySpaceDef) extends DatabaseImpl(ks) {\n\n    object stations extends WeatherStationQueries with connector.Connector\n  }\n\n  val db = new DB(ContactPoint.local.keySpace("db"))\n\n  val result = db.stations.getAllByCountry(Country("UK"))\n\n  result.onComplete(_ => db.shutdown())\n}\n')),(0,a.kt)("p",null,"It is necessary to define a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Column")," type to be used when defining the data model."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quill")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import io.getquill._\n\nimport scala.concurrent.ExecutionContext.Implicits.global\n\nobject Quill extends App {\n\n  val db = new CassandraAsyncContext(SnakeCase, "db")\n\n  import db._\n\n  case class Country(code: String) extends AnyVal\n\n  object Country {\n\n    implicit val decode: MappedEncoding[String, Country] = MappedEncoding[String, Country](Country(_))\n    implicit val encode: MappedEncoding[Country, String] = MappedEncoding[Country, String](_.code)\n  }\n  case class WeatherStation(country: Country, city: String, stationId: String, entry: Int, value: Int)\n\n  object WeatherStation {\n\n    val getAllByCountry = quote {\n      (country: Country) =>\n        query[WeatherStation].filter(_.country == country)\n    }\n  }\n\n  val result = db.run(WeatherStation.getAllByCountry(lift(Country("UK"))))\n\n  result.onComplete(_ => db.close())\n}\n')),(0,a.kt)("p",null,"Quill only requires definition of implicit encodings from/to ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,a.kt)("h2",{id:"non-blocking-io"},"Non-blocking IO"),(0,a.kt)("p",null,"This section compares the different options the libraries offer to do non-blocking IO."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Java Driver (v3.0.0)")),(0,a.kt)("p",null,"The Datastax driver allows the user to execute queries ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datastax/java-driver/tree/2.1/manual/async"},"asynchronously"),", returning ",(0,a.kt)("inlineCode",{parentName:"p"},"ListenableFuture"),"s."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phantom (v1.22.0)")),(0,a.kt)("p",null,"Phantom is asynchronous by default and all operations return ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),"s. It also allows users to process the data coming from Cassandra in a streaming fashion using ",(0,a.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.4.x/Iteratees"},(0,a.kt)("inlineCode",{parentName:"a"},"play-iteratees"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/2.4.x/ReactiveStreamsIntegration"},(0,a.kt)("inlineCode",{parentName:"a"},"play-streams-experimental")),", that make it possible to integrate with other software that support ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactive-streams/reactive-streams-jvm"},"reactive-streams"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quill (v0.4.0)")),(0,a.kt)("p",null,"Quill provides blocking, asynchronous and streaming sources for Cassandra. The asynchronous source returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),"s on all operations. The streaming source uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/monixio/monix"},"Monix")," to return an ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),". Monix is a reactive library compatible with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reactive-streams/reactive-streams-jvm"},"reactive-streams")," protocol."),(0,a.kt)("h2",{id:"other-considerations"},"Other considerations"),(0,a.kt)("p",null,"There other aspects the user might want to take into account like 3rd party dependencies. As both Phantom and Quill depend on the Datastax Java Driver, we are going to pay attention to which additional dependencies each of them add."),(0,a.kt)("p",null,"Phantom is composed by several modules, each of them with their 3rd party dependencies. Overall it adds more 3rd party dependencies than Quill and it has dependencies on libraries like shapeless, play-iteratees, play-streams-experimental or akka-actor. Quill, on the other hand, only adds dependencies on monix and scalamacros resetallattrs."))}p.isMDXComponent=!0}}]);
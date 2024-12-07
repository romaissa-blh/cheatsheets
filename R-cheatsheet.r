###
A<- matrix(c(1,1,2,1,5,8,2,8,14),3,3)
print(A)
n<- c(1,1,2)
e<- c(1,5,8)
s<- c(2,8,14)
P=cbind(n,e,s)
print(P)
m <- det(A)
print(m)
B <- t(A)
print(B)

if (m>0 && any(A == t(A))){
print(norm(A,type=""))
print(w)
C<- solve(A)
print(C)
print(eigen(A))
m
L <- chol(A)

print(L)
inv<-backsolve(L,diag(nrow(L)))%*% solve(t(L))
print(inv)
print(solve(A))
invr<- chol2inv(L)
print(invr)
b <- c(1,1,1)
x <- solve(A%*%A,b)
print(x)

y <- c(1,2,3,4)
z <- c(5,6,7,8)
F <- outer(y,z,FUN= function(y,z) y+z)
#print(F)
#print(sum(diag(A)))
for (i in 1:(nrow(F)))
 
   {F[i,i] <- 0
i<-1
while(i+2<=4) {
    
    F[i+2,i] <- 0
    F[i,i+2] <- 0
    i<-i+1
}}
#print(F)
for (i in 1 : nrow(F)){
    F[i,i]<- 0
    if(i+2<=4){
        F[i,i+2]<- 0
        F[i+2,i]<- 0
    }
}


#print(F)
#print(somme(10,50))

#result <- svd(A)
#SV<- result$d
#print(SV)
#m<- max(SV)
#print(m)



#print(F)
#somme <- function(i,n){
 #   s<-0
  #  repeat{
   #     s<-s+i
    #    i<-i+1
     #   if(i > n){break;}
    #}
    #return (s)
#}

#print(somme(10,50))


variance <- function(x, biased = FALSE) {  
    v<- sum((x - mean(x)) ^ 2)
    if (biased) {
        return( v/ length(x))
    }
    else {
        return( v/ (length(x)-1))
    }
}

x <- c(rep(0.5,10),rep(2,10),rep(2.5,10))
 print(variance(x))
 print(variance(x,TRUE))


#sum8 = function(X) {
 #   gcd <- function(a, b) {
  #      while (b != 0) {
   #         temp <- b
    #        b <- a %% b
     #       a <- temp
      #  }
       # return(a)
    #}
    #s <- 0
  #for (i in 1:length(X)) {
   # if (gcd(X[i], 8) == 2) {
    #  s <- s + X[i]
    #}
  #}
  
  #return(s)

#}
x <- c(2, 4, 6, 8, 10, 12, 14, 16)
#result <- sum8(X)
#print(result)

#print(sum(10:50))
sum8 = function(x) {
    library(gmp)
    result<- sum(x(gcd[x,8] ==2))
    return(result)
}
result <- sum8(x)
print(result)

phi <- function(x){
    return((1/ sqrt(2*pi)*exp(-0.5*x^2)))
}
x_values <- c(4,3,0,1,2)
phi_values <- phi(x_values)
dnorm_values <- dnorm(x_values)
comparison <- data.frame(
    x = x_values,
    phi = phi_values,
    dnorm = dnorm_values,
    difference = abs(phi_values - dnorm_values)
)
print(head(comparison,10))
Phi <- function(x){
    return(pnorm(x, mean = 0, sd = 1))
}
print( Phi(x_values))
phi1 <- function(x, terms = 30){
    sum_value <- 0 
    for (n in 0 : terms - 1 ){
        numerator <- x^ (2* n+1)
        denomerator <- prod(seq( 1,2*n+1, by =1))
        sum_value <- sum_value + numerator / denomerator
    }
    return(0.5 , phi(x)*sum_value)
}
set.seed(123)
random_numbers <- rnorm( 1000, mean = 10, sd = 2)
hist(random_numbers ,main = "histogram of Ramdom Numbers", xlab = "Value", ylab = "frequency" , col = "red", border = "blue")

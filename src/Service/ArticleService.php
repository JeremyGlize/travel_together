<?php
//
//namespace App\Service;
//
//use App\Repository\ArticleRepository;
//use Knp\Component\Pager\PaginatorInterface;
//use Symfony\Component\HttpFoundation\RequestStack;
//
//class ArticleService
//{
//    public function __construct(
//        private RequestStack $requestStack,
//        private ArticleRepository $articleRepository,
//        private PaginatorInterface $paginator
//    ){
//
//    }
//
//    public function getPaginatedArticles()
//    {
//        $request = $this->requestStack->getMainRequest();
//        $page = $request->query->getInt('page', 1);
//        $limit = 2;
//        $articlesQuery = $this->articleRepository->findForPagination();
//
//        return $this->paginator->paginate($articlesQuery, $page, $limit);
//    }
//}